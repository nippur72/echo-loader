# echo-loader

Webpack loader that prints to the console the filename being processed by another loader (for debugging purposes).

When chaining different loaders in webpack, sometimes is difficult to realize
wheter a loader is being triggered or not. 

By chaining `echo-loader` to the existing loaders, you can print a message 
that tells you that the loader has been activated.

Examples:

Suppose you are processing `*.tsx` files with the loader `ts-loader`:

A config that prints the filename of the file being processed by `ts-loader`:
```js
/* ... */ 
{ 
   test: /\.tsx?$/, 
   exclude: /node_modules/, 
   use: [
      { loader: "echo-loader" }, 
      { loader: "ts-loader" }, // <-- or your loader of choice
   ]
}
/* ... */
```

A config that prints the filename with a custom message:
```js
/* ... */ 
{ 
   test: /\.tsx?$/, 
   exclude: /node_modules/, 
   use: [
      { loader: "echo-loader?msg=processing" }, 
      { loader: "ts-loader" }, // <-- or your loader of choice
   ]
}
/* ... */
```

A config that dumps the actual file content to the console (after being processed by `ts-loader`)
```js
/* ... */ 
{ 
   test: /\.tsx?$/, 
   exclude: /node_modules/, 
   use: [
      { loader: "echo-loader?msg=dump" }, 
      { loader: "ts-loader" }, // <-- or your loader of choice
   ]
}
/* ... */
```

## License

MIT

## Contributions

Contributions in the form of issues or pull requests are welcome.

## Changes

- v0.0.1 - first (and possibly only one) release
