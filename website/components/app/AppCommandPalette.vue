<script setup lang="ts">
const { metaSymbol } = useShortcuts()

const isOpen = ref(false)

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      isOpen.value = !isOpen.value
    }
  }
})

</script>

<template>
  <div class="relative">
    <UInput
      class="hidden w-64 xl:flex"
      icon="i-material-symbols-search"
      placeholder="Search...">
      <template #trailing>
        <div class="flex items-center gap-0.5">
          <UKbd>{{ metaSymbol }}</UKbd>
          <UKbd>K</UKbd>
        </div>
      </template>
    </UInput>

    <UButton  class=" xl:hidden" icon="i-material-symbols-search" />

    <span class="absolute inset-0 cursor-pointer" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="h-96 overflow-auto p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Consectetur libero id faucibus nisl tincidunt eget. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Libero id faucibus nisl tincidunt eget nullam. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Vulputate eu scelerisque felis imperdiet proin fermentum. Volutpat consequat mauris nunc congue nisi vitae suscipit. Commodo odio aenean sed adipiscing diam donec. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Eu non diam phasellus vestibulum lorem sed. Etiam sit amet nisl purus in mollis nunc. Sit amet purus gravida quis blandit turpis cursus in hac. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Blandit aliquam etiam erat velit scelerisque. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Risus ultricies tristique nulla aliquet enim tortor at auctor. Tristique senectus et netus et malesuada fames ac turpis.

        Ullamcorper sit amet risus nullam eget. Porttitor leo a diam sollicitudin. Rhoncus est pellentesque elit ullamcorper dignissim. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Velit aliquet sagittis id consectetur purus ut faucibus. Nunc eget lorem dolor sed. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Velit dignissim sodales ut eu sem integer. Sed vulputate mi sit amet. Porttitor leo a diam sollicitudin tempor id eu. At elementum eu facilisis sed odio morbi quis commodo odio. Rhoncus est pellentesque elit ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aliquam nulla facilisi cras fermentum. Lectus mauris ultrices eros in cursus turpis. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Porttitor eget dolor morbi non. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.

        Dolor purus non enim praesent elementum facilisis leo. Sit amet massa vitae tortor condimentum. Iaculis nunc sed augue lacus viverra vitae congue eu. Est placerat in egestas erat imperdiet sed. Libero id faucibus nisl tincidunt eget. Euismod lacinia at quis risus. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Et odio pellentesque diam volutpat commodo sed. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Vulputate odio ut enim blandit volutpat maecenas volutpat. Nulla facilisi etiam dignissim diam quis enim. Ac felis donec et odio pellentesque diam volutpat commodo. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Arcu odio ut sem nulla pharetra diam sit amet nisl. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Venenatis a condimentum vitae sapien pellentesque. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.

        Pellentesque habitant morbi tristique senectus et netus. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Volutpat diam ut venenatis tellus in. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Ornare lectus sit amet est placerat. In ante metus dictum at tempor commodo ullamcorper. Dui id ornare arcu odio ut sem. Dui nunc mattis enim ut tellus elementum. Ac orci phasellus egestas tellus rutrum tellus. Amet massa vitae tortor condimentum lacinia quis. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Mollis aliquam ut porttitor leo a diam sollicitudin. Sodales ut eu sem integer vitae justo eget magna fermentum. Adipiscing vitae proin sagittis nisl. Platea dictumst vestibulum rhoncus est pellentesque elit. Nunc non blandit massa enim nec dui nunc mattis enim.

        Condimentum vitae sapien pellentesque habitant morbi tristique. Eu ultrices vitae auctor eu augue. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eget egestas purus viverra accumsan in nisl. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Viverra nibh cras pulvinar mattis nunc sed. Quis commodo odio aenean sed adipiscing diam. Et leo duis ut diam quam nulla. Aliquam sem fringilla ut morbi. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Egestas egestas fringilla phasellus faucibus scelerisque. Quisque id diam vel quam elementum. Nec sagittis aliquam malesuada bibendum arcu. Bibendum est ultricies integer quis auctor elit sed vulputate. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. In arcu cursus euismod quis viverra nibh cras. Vestibulum rhoncus est pellentesque elit. Pellentesque elit eget gravida cum sociis.
      </div>
    </UModal>
  </div>
</template>
