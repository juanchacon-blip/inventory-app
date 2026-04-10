<template>
  <button :type="type" :disabled="disabled" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label:    { type: String,  required: true },
  type:     { type: String,  default: "button" },
  disabled: { type: Boolean, default: false },
});

defineEmits(["click"]);
</script>