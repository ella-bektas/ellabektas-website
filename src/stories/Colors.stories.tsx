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
  const neutralColors = {
    '0': '#ffffff',
    '50': '#fafaf9',
    '100': '#f5f5f4',
    '200': '#e7e5e4',
    '300': '#d6d3d1',
    '400': '#a8a29e',
    '500': '#78716b',
    '600': '#57534e',
    '700': '#44403c',
    '800': '#292524',
    '900': '#1c1917',
    '950': '#0f0e0d',
  };

  const primaryColors = {
    '50': '#faf5ff',
    '100': '#f3e8ff',
    '200': '#e9d5ff',
    '300': '#d8b4fe',
    '400': '#c084fc',
    '500': '#a855f7',
    '600': '#9333ea',
    '700': '#7e22ce',
    '800': '#6b21a8',
    '900': '#581c87',
  };

  const secondaryColors = {
    '50': '#fdf8f3',
    '100': '#fdeee4',
    '200': '#fbdcc9',
    '300': '#f8c5a3',
    '400': '#f4a460',
    '500': '#f0956d',
    '600': '#e67e50',
    '700': '#d96f45',
    '800': '#c55a2b',
    '900': '#a0451e',
  };

  const statusColors = {
    'Success': '#22c55e',
    'Warning': '#f59e0b',
    'Error': '#ef4444',
    'Info': '#3b82f6',
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#2C2C2B' }}>
        Color Palette
      </h1>
      <p style={{ color: '#646469', marginBottom: '3rem' }}>
        Complete color system for the design system
      </p>

      <ColorPalette name="Neutral" colors={neutralColors} />
      <ColorPalette name="Primary (Purple)" colors={primaryColors} />
      <ColorPalette name="Secondary (Amber)" colors={secondaryColors} />
      <ColorPalette name="Status" colors={statusColors} />
    </div>
  );
};
