<template>
  <a-drawer
    title="选择你的技能"
    :width="720"
    :visible="props.visible"
    :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <div class="chooseList">
      <div class="btn" v-for="item in props.techData.tools">
        <a-button
          :type="item.select ? 'primary' : 'default'"
          @click="item.select = !item.select"
          >{{ item.name }}</a-button
        >
      </div>
      <div class="btn" v-for="item in props.techData.webgl">
        <a-button
          :type="item.select ? 'primary' : 'default'"
          @click="item.select = !item.select"
          >{{ item.name }}</a-button
        >
      </div>

      <div class="btn" v-for="item in props.techData.frame">
        <a-button
          :type="item.select ? 'primary' : 'default'"
          @click="item.select = !item.select"
          >{{ item.name }}</a-button
        >
      </div>
      <div class="btn" v-for="item in props.techData.list">
        <a-button
          :type="item.select ? 'primary' : 'default'"
          @click="item.select = !item.select"
          >{{ item.name }}</a-button
        >
      </div>
    </div>
  </a-drawer>
</template>

<script setup>
let props = defineProps(["techData", "visible"]);
let emit = defineEmits(["setVisible"]);

const rules = {
  name: [{ required: true, message: "Please enter user name" }],
  url: [{ required: true, message: "please enter url" }],
  owner: [{ required: true, message: "Please select an owner" }],
  type: [{ required: true, message: "Please choose the type" }],
  approver: [{ required: true, message: "Please choose the approver" }],
  dateTime: [
    { required: true, message: "Please choose the dateTime", type: "object" },
  ],
  description: [{ required: true, message: "Please enter url description" }],
};

function onClose() {
  emit("setVisible", false);
}
</script>

<style>
.chooseList {
  display: flex;
  flex-wrap: wrap;
}
.btn {
  padding: 5px 10px;
}
</style>
