const Spacing = ({ spacing, style }) => (
  <div>
    <h3 className="my-sm">{style}</h3>
    <table>
      <tbody>
        {Object.keys(spacing).map((key) => (
          <tr key={key}>
            <td className="p-xxs">
              <small className="text-grey-dark">{`${key} - ${spacing[key]}`}</small>
            </td>
            <td className="p-xxs">
              <div className={`h-xs w-${key} bg-primary`} style={{ flex: 1 }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Spacing;
