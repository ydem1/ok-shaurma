import { Phone } from "../Phone";

export const WorkSchedule = () => (
  <div className="flex xl:max-w-52 flex-col gap-1">
    <Phone className="text-xl" />

    <span className="text-xs">щодня з 10:00 до 22:00</span>

    <span className="text-gray-dark mt-2 text-sm">
      м. Хмельницький, вул. Проскурівська, 70а, Січових Стрільців 6
    </span>
  </div>
);
