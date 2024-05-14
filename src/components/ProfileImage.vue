<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="User profile image" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
    }
  }
}
</script>
