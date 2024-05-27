import "./style.css";

const Company = ({companyInfo}) => {
    const {name, founder, employees} = companyInfo;

  return (
    <div className="company-container">
        <div className="company-info">
            <h2>Company info</h2>
            <h3>Name: {name}</h3>
            <h3>Founder: {founder}</h3>
            <h3>Employees: {employees}</h3>
            {Object.keys(companyInfo.headquarters).map(key => (
                <h4 key={key} className="capitalize">{key}: {companyInfo.headquarters[key]}</h4>
            ))}
        </div>
        <div className="company-socials">
            <h3>Check our social links:</h3>
            {Object.keys(companyInfo.links).map(key => (
                <div key={key}>
                    <a href={companyInfo.links[key]}>{key}</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Company