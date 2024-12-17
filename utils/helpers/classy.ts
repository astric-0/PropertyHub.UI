export function classy(...vals: (string | Record<string, boolean>)[]): string {
	const cls: string = vals.reduce((acc: string, curr: unknown): string => {
		if (typeof curr == "string") return acc + " " + curr;
		if (typeof curr == "object") {
			return acc + Object.entries(curr as object).reduce(
				(accum, [className, shouldAdd]: [string, boolean]): string => {
          if (shouldAdd)
            return accum + " " + className;
          return accum;
        },
				""
			);
		}
		return acc;
	}, "");
	return cls;
}
