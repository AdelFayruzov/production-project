import { type RuleSetRule } from "webpack";
import { type BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function BuildLoaders(options: BuildOptions): RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const cssLoader = buildCssLoader(options.isDev);
    return [
        babelLoader,
        typeScriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
}
