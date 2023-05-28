import style from "./LanguajeSwitch.module.css";
import { useLanguage } from "@/app/context/LanguajeContext";

const LanguageSwitch = () => {
  const { handleLanguage, checked } = useLanguage();

  return (
    <div className={style.flagsContainer}>
      <div className={style.switch}>
        <input
          onChange={(e) => handleLanguage(e)}
          id="language-toggle"
          className={`${style.check_toggle} ${style.check_toggle_round_flat}`}
          type="checkbox"
          checked={checked}
        />
        <label htmlFor="language-toggle"></label>
        <span className={style.on}>
          <img
            className={style.flagImg}
            src="https://flagcdn.com/es.svg"
            alt="Spanish"
          />
        </span>
        <span className={style.off}>
          <img
            className={style.flagImg}
            src="https://flagcdn.com/us.svg"
            alt="English"
          />
        </span>
      </div>
    </div>
  );
};

export default LanguageSwitch;
