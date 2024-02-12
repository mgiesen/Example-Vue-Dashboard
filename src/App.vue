<template>
  <!-- Header -->
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between">
      <router-link to="/" class="logo d-flex align-items-center">
        <img src="logo/logo.png" alt="Logo">
        <span>Vue Dashboard</span>
      </router-link>
    </div>
  </header>

  <!-- Sidebar -->
  <sidebar id="sidebar" class="sidebar">

    <ul class="sidebar-nav">

      <!-- Dynamisch generiertes Seitenmenü -->
      <li v-for="(item, index) in navItems" :key="index" class="nav-item">
        <a class="nav-link" :class="{ 'collapsed': !item.isExpanded }" @click.prevent="toggleGroup(index)">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
          <i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul class="nav-content" v-show="item.isExpanded">
          <li v-for="(child, childIndex) in item.children" :key="`child-${childIndex}`">
            <router-link :to="child.path" class="d-flex align-items-center">
              <i :class="getIconClass(child.path)"></i>
              <span>{{ child.title }}</span>
            </router-link>
          </li>
        </ul>
      </li>

      <!-- Statische Verweise -->
      <li class="nav-heading">Divider</li>

      <li class="nav-item">
        <a href="https://github.com/mgiesen/Example-Vue-Dashboard" class="nav-link collapsed">
          <span>
            <i class="bi bi-github"></i>
            GitHub Page
          </span>

        </a>
      </li>

    </ul>

  </sidebar>

  <!-- Main -->
  <main id="main">
    <router-view />
  </main>

  <!-- Back to Top -->
  <div class="back-to-top d-flex align-items-center justify-content-center" @click="scrollToTop" tabindex="0">
    <i class="bi bi-arrow-up-short"></i>
  </div>
</template>

<script>

export default {
  name: 'App',
  data()
  {
    return {
      expandedGroups: {},
      navItems: [
        {
          title: "Dashboard Group 1",
          icon: "bi bi-grid",
          children: [
            { title: "Dashboard 1", path: "/" },
            { title: "Dashboard 2", path: "/mydashboard2" },
          ],
          isExpanded: true,
        }
      ]
    };
  },
  mounted()
  {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount()
  {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleGroup(index)
    {
      this.navItems[index].isExpanded = !this.navItems[index].isExpanded;
    },
    getIconClass(path)
    {
      return this.$route.path === path ? 'bi-circle-fill' : 'bi bi-circle';
    },
    handleScroll()
    {
      const backToTop = document.querySelector('.back-to-top');
      if (window.scrollY > 100)
      {
        backToTop.classList.add('active');
      } else
      {
        backToTop.classList.remove('active');
      }
    },
    scrollToTop()
    {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
/*
--------------------------------------------------------------
Header
--------------------------------------------------------------
*/
.logo {
  line-height: 1;
}

.logo img {
  max-height: 26px;
  margin-right: 6px;
}

.logo span {
  font-size: 26px;
  font-weight: 650;
  color: #160d50;
  font-family: "Nunito", sans-serif;
}

.header {
  transition: all 0.5s;
  z-index: 997;
  height: 60px;
  box-shadow: 0px 2px 20px rgba(5, 40, 110, 0.1);
  background-color: #fff;
  padding-left: 20px;
}

/*
--------------------------------------------------------------
Sidebar
--------------------------------------------------------------
*/
.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 996;
  transition: all 0.3s;
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #aab7cf transparent;
  box-shadow: 0px 0px 20px rgba(1, 41, 112, 0.1);
  background-color: #fff;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* Internet Explorer/Edge */
  user-select: none;         /* Standard: Chrome und andere */
}

@media (max-width: 1199px) {
	.sidebar {
		left: -300px;
	}
}

.sidebar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #fff;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #aab7cf;
}

.sidebar-nav {
  padding: 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav .nav-item {
  margin-bottom: 5px;
}

.sidebar-nav .nav-heading {
  font-size: 11px;
  text-transform: uppercase;
  color: #899bbd;
  font-weight: 600;
  margin: 10px 0 5px 15px;
}

.sidebar-nav .nav-link {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #4154f1;
  transition: 0.3;
  background: #f6f9ff;
  padding: 10px 15px;
  border-radius: 4px;
}

.nav-link-active span {
  font-weight: 900;
}

.sidebar-nav .nav-link i {
  font-size: 16px;
  margin-right: 10px;
  color: #4154f1;
}

.sidebar-nav .nav-link.collapsed {
  color: #160d50;
  background: #fff;
}

.sidebar-nav .nav-link.collapsed i {
  color: #899bbd;
}

.sidebar-nav .nav-link:hover {
  color: #4154f1;
  background: #f6f9ff;
}

.sidebar-nav .nav-link:hover i {
  color: #4154f1;
}

.sidebar-nav .nav-link .bi-chevron-down {
  margin-right: 0;
  transition: transform 0.2s ease-in-out;
}

.sidebar-nav .nav-link:not(.collapsed) .bi-chevron-down {
  transform: rotate(180deg);
}

.sidebar-nav .nav-content {
  padding: 5px 0 0 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav .nav-content a {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #160d50;
  transition: 0.3;
  padding: 10px 0 10px 40px;
  transition: 0.3s;
}

.sidebar-nav .nav-content a i {
  font-size: 6px;
  margin-right: 8px;
  line-height: 0;
  border-radius: 50%;
}

.sidebar-nav .nav-content a:hover,
.sidebar-nav .nav-content a.active {
  color: #4154f1;
}


/*
--------------------------------------------------------------
Main
--------------------------------------------------------------
*/

#main {
  margin-top: 60px;
  padding: 20px 30px;
  transition: all 0.3s;
}

@media (min-width: 1200px) {
	#main {
		margin-left: 300px;
		padding: 20px;
	}
}

/*
--------------------------------------------------------------
BackToTop Button
--------------------------------------------------------------
*/

.back-to-top {
  position: fixed;
  visibility: hidden;
  cursor: pointer;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background: #4154f1;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #6776f4;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}
</style>
```