interface BoxItemProps {
  icon: string;
  title: string;
  description: string;
}

const BoxItem = ({ icon, title, description }: BoxItemProps) => {
  return (
    <div className="flex flex-col items-center md:p-6 p-8 border border-primary-100">
      <img src={icon} width={"auto"} height={48} alt={title} />

      <hr className="text-neutral-300" />
      <div className="flex flex-col mt-2">
        <p className="font-display md:text-display-xs text-display-xs font-normal">
          {title}
        </p>
        <p className="text-body-lg font-light text-[#1B4678] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};
export default BoxItem;
