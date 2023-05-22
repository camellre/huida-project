import style from "./ContactUsPageIndex.module.scss";

export const ContactUsPageIndex = () => {
  const countryList = [];
  return (
    <>
      <article className={style.contactUsPageWrapper}>
        <h1>联系我们</h1>
        <form action="">
          <ul className={style.contactUsFormWrapper}>
            <div className={style.contactUsFormCenter}>
              <li className={style.contactUsFormTitle}>
                <h2>您的意向</h2>
              </li>
              <li className={style.contactUsFormItem}>
                <label htmlFor="programDropdown">项目</label>
                <select
                  name="program"
                  id="programDropdown"
                  className={style.contactUsFormInput}
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
              </li>
              <li className={style.contactUsFormItem}>
                <label htmlFor="contactMethodDropdown">
                  您希望我们如何联系您？
                </label>
                <select
                  name="contactMethod"
                  id="contactMethodDropdown"
                  className={style.contactUsFormInput}
                >
                  <option value="method_1">电子邮箱</option>
                  <option value="method_2">电话</option>
                </select>
              </li>
              <li className={style.contactUsFormQuestionBox}>
                <label htmlFor="questionBox">详细问题</label>
                <textarea
                  name="question"
                  id="questionBox"
                  className={style.contactUsFormInput}
                />
              </li>

              <li className={style.contactUsFormTitle}>
                <h2>您的联系方式</h2>
              </li>

              <li className={style.contactUsFormItem}>
                <label htmlFor="fullName">您的姓名</label>
                <input
                  type="text"
                  id="fullName"
                  className={style.contactUsFormInput}
                />
              </li>
              <li className={style.contactUsFormItem}>
                <label htmlFor="email">您的电子邮箱</label>
                <input
                  type="email"
                  id="email"
                  className={style.contactUsFormInput}
                />
              </li>
              <li className={style.contactUsFormItem}>
                <label htmlFor="phone">您的电话</label>
                <input
                  type="tel"
                  id="phone"
                  className={style.contactUsFormInput}
                />
              </li>
              <li className={style.contactUsFormItem}>
                <label htmlFor="residency">您目前的永久居住国家</label>
                <select
                  name="residencyCountry"
                  id="residency"
                  className={style.contactUsFormInput}
                >
                  <option value="residencyCountry_1">USA</option>
                  <option value="residencyCountry_2">USA</option>
                  <option value="residencyCountry_3">USA</option>
                  <option value="residencyCountry_4">USA</option>
                  <option value="residencyCountry_5">USA</option>
                  <option value="residencyCountry_6">USA</option>
                </select>
              </li>
            </div>
          </ul>
        </form>
      </article>
    </>
  );
};
