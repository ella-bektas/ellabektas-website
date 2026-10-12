import type { Meta } from '@storybook/nextjs-vite';

const meta = {
  title: 'Foundations/Colors',
  tags: ['!autodocs'],
} satisfies Meta;

export default meta;

const ColorPalette = ({
  name,
  colors,
}: {
  name: string;
  colors: Record<string, string>;
}) => (
  <div style={{ marginBottom: '3rem' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2C2C2B' }}>
      {name}
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
      {Object.entries(colors).map(([colorName, hexValue]) => (
        <div key={colorName} style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: '100%',
              height: '100px',
              backgroundColor: hexValue,
              borderRadius: '8px',
              border: '1px solid #e7e5e4',
              marginBottom: '0.5rem',
            }}
          />
          <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#2C2C2B' }}>
            {colorName}
          </p>
          <p style={{ fontSize: '0.75rem', color: '#646469', fontFamily: 'monospace' }}>
            {hexValue}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export const Palette = () => {
  const primaryColors = {
    '50': '#f5f5f3',
    '100': '#e8e7e2',
    '200': '#ddd8cf',
    '300': '#c9bfb3',
    '400': '#a89c8f',
    '500': '#8b8270',
    '600': '#6f6a5f',
    '700': '#5a544a',
    '800': '#403d38',
    '900': '#2b2825',
  };

  const taupeColors = {
    '0': '#ffffff',
    '50': '#f8f6f4',
    '100': '#f2ede9',
    '200': '#e7e1db',
    '300': '#d9cfc4',
    '400': '#b5a596',
    '500': '#9d8b7e',
    '600': '#78716b',
    '700': '#5e5550',
    '800': '#4a423a',
    '900': '#3a322f',
    '950': '#211d1a',
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#2C2C2B' }}>
        Color Palette
      </h1>
      <p style={{ color: '#646469', marginBottom: '3rem' }}>
        Complete color system for the design system
      </p>

      <ColorPalette name="Primary (Olive)" colors={primaryColors} />
      <ColorPalette name="Taupe (Neutral)" colors={taupeColors} />
    </div>
  );
};
