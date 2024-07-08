import { Badge } from "./ui/badge";

const Eyebrow = ({ label }: { label: string | React.ReactNode }) => {
  return (
    <div className="flex flex-row items-center opacity-80">
      <hr className="w-16 text-secondary-900" />
      <Badge className="text-body-sm font-semibold tracking-widest text-white pl-4">
        {label}
      </Badge>
    </div>
  );
};
export default Eyebrow;
