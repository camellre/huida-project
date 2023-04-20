import style from "./ContactUsPage.module.scss";

export const ContactUsPage = () => {
  const countryList = [];
  return (
    <main className={style.contactUsPageWrapper}>
      <h1>联系我们</h1>
      <article>
        <form action="">
          <ul className={style.contactUsFormWrapper}>
            <li>
              <h2>您的意向</h2>
            </li>
            <li>
              <label htmlFor="programDropdown">项目</label>
              <select name="program" id="programDropdown">
                <option value="program_1">格林纳达</option>
                <option value="program_2">圣基茨</option>
                <option value="program_3">多米尼加</option>
                <option value="program_4">美国</option>
                <option value="program_5">马耳他</option>
                <option value="program_6">格林纳达</option>
                <option value="program_7">格林纳达</option>
                <option value="program_8">格林纳达</option>
              </select>
            </li>
            <li>
              <label htmlFor="contactMethodDropdown">
                您希望我们如何联系您？
              </label>
              <select name="contactMethod" id="contactMethodDropdown">
                <option value="method_1">电子邮箱</option>
                <option value="method_2">电话</option>
              </select>
            </li>
            <li>
              <label htmlFor="questionBox">详细问题</label>
              <textarea name="question" id="questionBox"></textarea>
            </li>
            <li>
              <h2>您的联系方式</h2>
            </li>
            <li>
              <label htmlFor="fullName">您的姓名</label>
              <input type="text" id="fullName" />
            </li>
            <li>
              <label htmlFor="email">您的电子邮箱</label>
              <input type="email" id="email" />
            </li>
            <li>
              <label htmlFor="phone">您的电话</label>
              <input type="tel" id="phone" />
            </li>
            <li>
              <label htmlFor="residency">您目前的永久居住国家</label>
              <select name="residencyCountry" id="residency"></select>
            </li>
          </ul>
        </form>
      </article>
    </main>
  );
};
