import BtnType from "../../types/btnType/BtnType"

const PrimaryButton = (btn: BtnType) => {
  if (btn.href) {
    return (
      <a href={btn.href} target={btn.target} className={"btn btn-primary " + btn.classes}>
        {btn.label}
        {btn.icon ?
          <span className="material-symbols-rounded" area-hidden="true">
            {btn.icon}
          </span> : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-primary " + btn.classes}>
        {btn.label}
      </button>
    )
  }
}

export default PrimaryButton
