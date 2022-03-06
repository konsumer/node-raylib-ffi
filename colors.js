export const Color = (r=0, g=0, b=0, a=0xFF) => ((r << 24) >>> 0 | g << 16 | b << 8 | a) >>> 0

export const LIGHTGRAY = Color(200, 200, 200, 255) // Light Gray
export const GRAY = Color(130, 130, 130, 255) // Gray
export const DARKGRAY = Color(80, 80, 80, 255) // Dark Gray
export const YELLOW = Color(253, 249, 0, 255) // Yellow
export const GOLD = Color(255, 203, 0, 255) // Gold
export const ORANGE = Color(255, 161, 0, 255) // Orange
export const PINK = Color(255, 109, 194, 255) // Pink
export const RED = Color(230, 41, 55, 255) // Red
export const MAROON = Color(190, 33, 55, 255) // Maroon
export const GREEN = Color(0, 228, 48, 255) // Green
export const LIME = Color(0, 158, 47, 255) // Lime
export const DARKGREEN = Color(0, 117, 44, 255) // Dark Green
export const SKYBLUE = Color(102, 191, 255, 255) // Sky Blue
export const BLUE = Color(0, 121, 241, 255) // Blue
export const DARKBLUE = Color(0, 82, 172, 255) // Dark Blue
export const PURPLE = Color(200, 122, 255, 255) // Purple
export const VIOLET = Color(135, 60, 190, 255) // Violet
export const DARKPURPLE = Color(112, 31, 126, 255) // Dark Purple
export const BEIGE = Color(211, 176, 131, 255) // Beige
export const BROWN = Color(127, 106, 79, 255) // Brown
export const DARKBROWN = Color(76, 63, 47, 255) // Dark Brown
export const WHITE = Color(255, 255, 255, 255) // White
export const BLACK = Color(0, 0, 0, 255) // Black
export const BLANK = Color(0, 0, 0, 0) // Blank (Transparent)
export const MAGENTA = Color(255, 0, 255, 255) // Magenta
export const RAYWHITE = Color(245, 245, 245, 255) // My own White (raylib logo)
