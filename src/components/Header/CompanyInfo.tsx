// TODO add api

const phone = "380942564545";

export const CompanyInfo = () => (
  <div className="flex gap-7">
    <span className="text-base font-bold">Хмельницький</span>

    <a href={`tel:${phone}`} className="text-base font-bold hover:underline">
      +38 094 256 45 45
    </a>
  </div>
);
