import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import path from "path";
import {BuildPlugins} from "./buildPlugins";
import {BuildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {paths, mode, isDev} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: BuildPlugins(options),
        module: {
            rules: BuildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}