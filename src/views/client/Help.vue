<template>
  <div class="help content">
    <div class="card">
      <div class="card__content">
        <div class="card__header">
          <h2>Связь с поддержкой</h2>
        </div>
        <p>Вы можете связаться с поддержкой по этим ссылкам:</p>
        <div class="card__box-line">
          <a class="box-line__box">
            <span class="card__title">Почта</span>
            <i class="material-icons">mail_outline</i>
            <span class="card__title">support@soldout.com</span>
          </a>
          <a class="box-line__box">
            <span class="card__title">Telegram</span>
            <i class="iconify" data-icon="mdi-telegram"></i>
            <span class="card__title">SoldOutBot</span>
          </a>
          <a class="box-line__box">
            <span class="card__title">WhatsApp</span>
            <i class="iconify" data-icon="mdi-whatsapp"></i>
            <span class="card__title">SoldOutBot</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.help .material-icons,
.iconify {
  margin: 0;
}
.box-line__box {
  width: calc(100% / 4);
}
</style>
