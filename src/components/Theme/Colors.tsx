const Colors = ({ colors }) => (
  <div className="grid grid-cols-3 gap-sm">
    {Object.keys(colors).map((key) => (
      <div key={key}>
        <div className="grid grid-cols-2 rounded-t-2xl overflow-hidden">
          <div className={`h-100 col-span-2 bg-${key}`} />
          <div className={`h-32 bg-${key}-light`} />
          <div className={`h-32 bg-${key}-dark`} />
        </div>

        <p className="capitalize mb-xxs">
          <small className="text-grey-dark">{key}</small>
        </p>
      </div>
    ))}
  </div>
);

export default Colors;
