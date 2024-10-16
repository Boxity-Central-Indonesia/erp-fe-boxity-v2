// tailwind.config.js
const { violet, blackA, mauve, green } = require("@radix-ui/colors");

export default {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				...mauve,
				...violet,
				...green,
				...blackA,
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: '#F95B12',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				overlayShow: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				contentShow: {
					from: {
						opacity: "0",
						transform: "translate(-50%, -48%) scale(0.96)",
					},
					to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
				},
				overlayHide: {
					from: { opacity: "1" },
					to: { opacity: "0" },
				},
				contentHide: {
					from: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
					to: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
				},
			},
			animation: {
				overlayShow: "overlayShow 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				contentShow: "contentShow 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				overlayHide: "overlayHide 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				contentHide: "contentHide 400ms cubic-bezier(0.16, 1, 0.3, 1)",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}
