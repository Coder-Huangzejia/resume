<template>
  <a-drawer
    title="请输入你的基本信息"
    :width="720"
    :visible="props.visible"
    :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <a-form :model="form" :rules="rules" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="名字" name="name">
            <a-input
              v-model:value="props.form.name"
              placeholder="请输入你的姓名"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="联系方式" name="mobile">
            <a-input
              v-model:value="props.form.mobile"
              placeholder="请输入你的手机"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="邮箱" name="email">
            <a-input
              v-model:value="props.form.email"
              placeholder="请输入你的邮箱"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="前端工作经验" name="frontEndTime">
            <a-input
              v-model:value="props.form.frontEndTime"
              placeholder="时间：1年"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="毕业学校" name="school">
            <a-input
              v-model:value="props.form.school"
              placeholder="请输入你的毕业学校"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="专业" name="major">
            <a-input
              v-model:value="props.form.major"
              placeholder="请输入你的专业"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="年龄" name="age">
            <a-input
              v-model:value="props.form.age"
              placeholder="请输入你的毕业学校"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="期望薪资" name="salary">
            <a-input
              v-model:value="props.form.salary"
              placeholder="请输入你的期望薪资"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="博客" name="blog">
            <a-input
              v-model:value="props.form.blog"
              placeholder="请输入你的博客地址或个人网址"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="github" name="github">
            <a-input
              v-model:value="props.form.github"
              placeholder="请输入你的github网址"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="自我评价" name="description">
            <a-textarea
              v-model:value="props.form.description"
              :rows="4"
              placeholder="请输入自我评价"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="荣誉奖励" name="reward">
            <a-textarea
              v-model:value="props.form.reward"
              :rows="4"
              placeholder="请输入你获取的荣誉奖励"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <!-- <template #footer>
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onClose">Submit</a-button>
    </template> -->
  </a-drawer>
</template>

<script setup>
let props = defineProps(["form", "visible"]);
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
