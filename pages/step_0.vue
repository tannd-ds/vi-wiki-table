<template>
  <div>
    <AppDropzone
      id="anno_file"
      :data="annotation_store.anno_file.tables"
      :init-state="annotation_store.is_anno_file_empty"
      @update-file="(file) => annotation_store.update_anno_file(file)"
      class="min-h-[50vh] min-w-[30vw]"
    >
      <template #default>demo_00.json</template>
      <template #uploaded>Uploaded</template>
    </AppDropzone>
  </div>
</template>

<script setup>

import { useAnnotationStore } from "@/stores/annotationStore";
const annotation_store = useAnnotationStore();

</script>