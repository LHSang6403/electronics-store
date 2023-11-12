import PropTypes from "prop-types";

ShowMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function ShowMore(props: any): JSX.Element {
  const { onClick } = props;

  return (
    <button
      onClick={onClick}
      className="w-20 h-6 mt-1 flex flex-row justify-center items-center hover:text-primary"
    >
      Show more
    </button>
  );
}
