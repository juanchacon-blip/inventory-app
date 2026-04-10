<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="field__error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  id:          { type: String,  required: true },
  label:       { type: String,  required: true },
  modelValue:  { type: String,  default: "" },
  type:        { type: String,  default: "text" },
  placeholder: { type: String,  default: "" },
  error:       { type: String,  default: "" },
});

defineEmits(["update:modelValue"]);
</script>