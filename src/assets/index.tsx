export const PlusIcon = ({ classNames }: { classNames: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Isolation_Mode"
      data-name="Isolation Mode"
      viewBox="0 0 32 32"
      width="512"
      height="512"
      className={`${classNames} fill-mediumGray mr-[-10px] mt-[10px]`}
    >
      <polygon points="50 10.5 13.5 10.5 13.5 6 10.5 6 10.5 10.5 6 10.5 6 13.5 10.5 13.5 10.5 18 13.5 18 13.5 13.5 18 13.5 18 10.5" />
    </svg>
  );
};

export const MinusIcon = ({ classNames }: { classNames: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        className={`${classNames} fill-mediumGray`}
        width="512"
        height="512"
      >
        <g>
          <path d="M490.667,234.667H21.333C9.551,234.667,0,244.218,0,256c0,11.782,9.551,21.333,21.333,21.333h469.333   c11.782,0,21.333-9.551,21.333-21.333C512,244.218,502.449,234.667,490.667,234.667z" />
        </g>
      </svg>
    </>
  );
};
