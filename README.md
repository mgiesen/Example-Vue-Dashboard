# Example-Vue-Dashboard

Dieses Beispielprojekt demonstriert den Aufbau eines schlanken Single-Page Dashboards unter Verwendung des Vue.js Frameworks. Es illustriert, wie einzelne Widgets Daten dynamisch via REST oder Websockets geladen werden können. Für das grundlegende Design wird Bootstrap verwendet, welches eine schnelle und responsive Gestaltung ermöglicht.

### VueCLI installieren

Um dieses Beispiel zu nutzen, vergewissern Sie sich zunächst, dass VueCLI auf Ihrem System installiert ist. Installieren Sie VueCLI global, indem Sie den folgenden Befehl in einem Terminal ausführen:

```bash
npm install -g @vue/cli
```

# Projekteinrichtung

Nach der Installation von VueCLI können Sie das Projekt einrichten. Öffnen Sie ein Terminal im Projektverzeichnis und führen Sie den folgenden Befehl aus, um die notwendigen Abhängigkeiten zu installieren:

```bash
npm install
```

# Kompilieren und Hot-Reload für die Entwicklung

Um das Dashboard im Entwicklungsmodus mit Hot-Reload zu starten, verwenden Sie:

```bash
npm run serve
```

Dies startet einen lokalen Server, auf dem Sie das Dashboard im Browser unter http://localhost:8080 betrachten können. Änderungen am Code werden automatisch übernommen und sofort im Browser angezeigt.

# Kompilieren und Minifizieren für die Produktion

Wenn Sie das Dashboard für den Einsatz in einer Produktionsumgebung vorbereiten möchten, nutzen Sie:

```bash
npm run build
```
