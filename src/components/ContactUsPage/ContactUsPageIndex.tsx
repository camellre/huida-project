import Button from "../../genericComponents/Button/Button";
import style from "./ContactUsPageIndex.module.scss";

export const ContactUsPageIndex = () => {
  const countryList = [];
  return (
    <>
      <article className={style.pageWrapper}>
        <form action="" className={style.formWrapper}>
          <h1 className={style.title}>联系我们</h1>

          <h2 className={style.formTitle}>您的意向</h2>

          <label htmlFor="programDropdown" className={style.labelTitle}>
            项目
          </label>
          <div className={style.formInputWrapper}>
            <select
              name="program"
              id="programDropdown"
              className={style.formInput}
            >
              <option value="program_1">格林纳达</option>
              <option value="program_2">圣基茨</option>
              <option value="program_3">多米尼加</option>
              <option value="program_4">美国</option>
              <option value="program_5">马耳他</option>
              <option value="program_6">葡萄牙</option>
              <option value="program_7">安提瓜</option>
              <option value="program_8">土耳其</option>
            </select>
          </div>

          <label htmlFor="contactMethodDropdown" className={style.labelTitle}>
            您希望我们如何联系您？
          </label>
          <div className={style.formInputWrapper}>
            <select
              name="contactMethod"
              id="contactMethodDropdown"
              className={style.formInput}
            >
              <option value="method_1">电子邮箱</option>
              <option value="method_2">电话</option>
            </select>
          </div>

          <label htmlFor="questionBox" className={style.labelTitle}>
            详细问题
          </label>
          <div className={style.formInputWrapper}>
            <textarea
              name="question"
              id="questionBox"
              className={style.formQuestionInput}
            />
          </div>

          <h2 className={style.formTitle}>您的联系方式</h2>

          <label htmlFor="fullName" className={style.labelTitle}>
            您的姓名
          </label>
          <div className={style.formInputWrapper}>
            <input type="text" id="fullName" className={style.formInput} />
          </div>

          <label htmlFor="email" className={style.labelTitle}>
            您的电子邮箱
          </label>
          <div className={style.formInputWrapper}>
            <input type="email" id="email" className={style.formInput} />
          </div>

          <label htmlFor="phone" className={style.labelTitle}>
            您的电话
          </label>
          <div className={style.formInputWrapper}>
            <input type="tel" id="phone" className={style.formInput} />
          </div>

          <label htmlFor="residency" className={style.labelTitle}>
            您目前的永久居住国家
          </label>
          <div className={style.formInputWrapper}>
            <select
              name="residencyCountry"
              id="residency"
              className={style.formInput}
            >
              <option value="residencyCountry_1">USA</option>
              <option value="residencyCountry_2">USA</option>
              <option value="residencyCountry_3">USA</option>
              <option value="residencyCountry_4">USA</option>
              <option value="residencyCountry_5">USA</option>
              <option value="residencyCountry_6">USA</option>
            </select>
          </div>
          <Button theme={style.submitButton} text="提交" />
        </form>
      </article>
    </>
  );
};
