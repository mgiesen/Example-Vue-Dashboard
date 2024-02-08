class WebSocketService
{
    constructor()
    {
        this.sockets = {};
        this.subscribers = {};
        this.reconnectInterval = 5000;
    }

    connect(url)
    {
        // Prüft, ob bereits eine Verbindung für die URL besteht
        if (!this.sockets[url])
        {
            this.sockets[url] = new WebSocket(url);
            this.subscribers[url] = [];

            this.sockets[url].onopen = () =>
            {
                this.notifySubscribers(url, { status: 'open' });
            };

            this.sockets[url].onmessage = (message) =>
            {
                const parsedMessage = JSON.parse(message.data);
                this.notifySubscribers(url, parsedMessage);
            };

            this.sockets[url].onclose = () =>
            {
                this.notifySubscribers(url, { status: 'close' });

                delete this.sockets[url];
                setTimeout(() => this.connect(url), this.reconnectInterval);
            };

            this.sockets[url].onerror = () =>
            {
                this.notifySubscribers(url, { status: 'error' });
                this.sockets[url].close();
            };
        }
    }

    subscribe(url, callback)
    {
        if (!this.subscribers[url])
        {
            this.subscribers[url] = [];
        }
        this.subscribers[url].push(callback);

        // Wenn der Socket bereits geöffnet ist, informiere den neuen Abonnenten sofort
        if (this.sockets[url] && this.sockets[url].readyState === WebSocket.OPEN)
        {
            callback({ type: 'open' });
        }
    }

    unsubscribe(url, callback)
    {
        if (this.subscribers[url])
        {
            this.subscribers[url] = this.subscribers[url].filter((cb) => cb !== callback);
        }
    }

    notifySubscribers(url, data)
    {
        if (this.subscribers[url])
        {
            this.subscribers[url].forEach((cb) => cb(data));
        }
    }
}

export const webSocketService = new WebSocketService();
