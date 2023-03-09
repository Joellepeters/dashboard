<script lang="ts">
import { getHeadline } from '../../helpers.js'
import BaseLineItem from '../shared/BaseLineItem.vue'
import BaseView from '../shared/BaseView.vue'

export default {
  name: 'LinksView',
  props: {
    onLoaded: {
      type: Function,
      required: true,
    },
  },
  components: {
    BaseView,
    BaseLineItem,
  },
  methods: {
    loaded(items: Array<unknown>) {
      this.onLoaded()
      this.links = items
    },
    headline(item: object) {
      return item.properties.name.title[0].text.content
    },
    subheadline(item: objects) {
      if (item.properties.tags.multi_select.length > 0) {
        return item.properties.tags.multi_select[0].name
      } else return 'None'
    },
    href(item: object) {
      return item.properties.link.url
    },
  },
  data() {
    return {
      links: {
        type: Array,
        default: [],
      },
    }
  },
}
</script>

<template>
  <BaseView :onLoaded="loaded" endPoint="/links">
    <menu>
      <BaseLineItem
        v-for="(link, index) in links"
        :key="index"
        :headline="headline(link)"
        :imageUrl="href(link)"
        :subheadline="subheadline(link)"
      >
      </BaseLineItem>
    </menu>
  </BaseView>
</template>

<style scoped>
menu {
  display: flex;
  flex-direction: column;
}
</style>
