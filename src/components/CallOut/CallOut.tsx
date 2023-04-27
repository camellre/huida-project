import style from "./CallOut.module.scss";

export const CallOut = () => {
  return (
    <article className={style.callOutBackground}>
      <div className={style.callOutWrapper}>
        <h2 className={style.callOutTitle}>专业、高效、全方位的移民咨询服务</h2>
        <div className={style.callOutBodyWrapper}>
          <div>
            <h2 className={style.callOutSideTitle}>服务案例</h2>
            <h2 className={style.callOutSideNumber}>2000+</h2>
          </div>
          <p className={style.callOutBodyText}>
            汇达移民咨询公司致力于为客户提供专业、高效、全方位的移民咨询服务。我们的团队由经验丰富的移民专家组成，他们对各国移民政策、签证要求以及移民过程等有着深入的了解。我们的宗旨是通过为客户定制移民方案，帮助客户顺利实现移民梦想。除此之外，我们还为客户提供签证代办和文件公证等服务，确保客户的移民过程顺利、高效。我们的团队始终坚持以客户的需求为先，以诚信、专业、高效的服务理念，为客户提供最佳的移民方案。选择汇达移民咨询公司，您将得到最专业、最高效、最全面的移民服务。我们将竭诚为您服务，帮助您实现移民梦想。
          </p>
        </div>
      </div>
    </article>
  );
};
