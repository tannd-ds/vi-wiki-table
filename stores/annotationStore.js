import { defineStore } from "pinia";

export const useAnnotationStore = defineStore("annotation", () => {
  let anno_file =  {
    name: "demo.json",
    tables: [],
  }

  function is_anno_file_empty() {
    return this.anno_file.tables.length == 0;
  }

  function is_uploaded_data_valid(data) {
    const N_TABLES = data.length;
    const has_minimal_length = N_TABLES > 0;
    if (!has_minimal_length) {
      alert("Your annotator file uploaded is not valid! Please try again");
      return false;
    }

    for (let i = 0; i < N_TABLES ; i++) {
      const has_table = data[i].table_html != undefined;
      if (!has_table) {
        alert("Your annotator file uploaded is not valid! Please try again");
        return false;
      }
    }

    return true;

  }

  function update_anno_file(data) {
    if (!is_uploaded_data_valid(data.data))
      return;
    anno_file.name = data.name;
    anno_file.tables = data.data;
    localStorage.setItem("cv_anno_file", JSON.stringify(anno_file));
  }

  return { anno_file, is_anno_file_empty, update_anno_file }; 
});
