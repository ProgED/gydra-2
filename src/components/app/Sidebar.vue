<template>
  <ul class="sidenav app-sidenav open">
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      custom
      v-slot="{ href, route, navigate, isExactActive }"
    >
      <li :class="{ active: isExactActive }">
        <a
          :href="href"
          @click="navigate"
          class="waves-effect waves-orange pointer"
          >{{ route.name }}</a
        >
      </li>
    </router-link>
  </ul>
</template>

<script>
  export default {
    props: ["value"],
    data: () => ({
      links: [
        { url: "/" },
        { url: "/history" },
        { url: "/planning" },
        { url: "/record" },
        { url: "/categories" }
      ]
    })
  }
</script>
