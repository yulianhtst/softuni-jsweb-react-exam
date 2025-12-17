export const COLORS = {
    primary: "#2563eb", // blue-600
    secondary: "#64748b", // slate-500
    success: "#16a34a",
    danger: "#dc2626",
    warning: "#f59e0b",
};
export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,
};
export const FONTS = {
    family: `'Inter', system-ui, sans-serif`,
    size: {
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
    },
    weight: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
};
export const SHADOW = {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
};

const appTheme = { COLORS, SIZES, FONTS, SHADOW };

export default appTheme;
