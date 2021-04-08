import * as React from 'react';

const sizes = [
  { el: 'h1', title: 'Heading 1' },
  { el: 'h2', title: 'Heading 2' },
  { el: 'h3', title: 'Heading 3' },
  { el: 'h4', title: 'Heading 4' },
  { el: 'h5', title: 'Heading 5' },
  { el: 'h6', title: 'Heading 6' },
  { el: 'p', title: 'Paragraph' },
  { el: 'small', title: 'Small' },
];

const Typography = ({
  style,
  className,
}: {
  className?: string;
  style: string;
}) => (
  <div className="mb-lg">
    <h3 className="mb-sm">{style}</h3>

    {sizes.map(({ title, el }) => (
      <div key={el}>
        <p className="text-grey-dark">
          <small>{title}</small>
        </p>

        {React.createElement(
          el,
          { className: `mb-xs ${className}` },
          'Almost before we knew it, we had left the ground.'
        )}
      </div>
    ))}
  </div>
);

export default Typography;
