import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

function CanvasLoader() {
	const { progress } = useProgress();

	return (
		<Html
			as="div"
			center
			className=" flex justify-center items-center w-full h-full flex-col z-30"
		>
			<div className="canvas-loader-shell z-30">
				<span className="canvas-loader z-30"></span>
			</div>
			<p className="text-[14px] text-[#fff7cc] font-bold mt-6 z-30 tracking-[0.25em] uppercase">
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
}

export function PreLoader() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			for (let i = 0; i < 100; i++) {
				setTimeout(() => {
					setProgress(i);
				}, 30 * i);
			}
		};

		updateProgress();
	}, []);

	return (
		<div className="w-[100svw] h-[100svh] overflow-hidden bg-bgPrimaryLight z-40 fixed top-0 left-0 flex flex-col justify-center items-center gap-8">
			<div className="portfolio-loader" aria-hidden="true">
				<div className="portfolio-loader__orbit"></div>
				<div className="portfolio-loader__core">
					<span className="portfolio-loader__bracket">&lt;</span>
					<span className="portfolio-loader__dot"></span>
					<span className="portfolio-loader__bracket">/&gt;</span>
				</div>
			</div>
			<div className="flex w-[min(17rem,80vw)] flex-col items-center gap-3">
				<p className="text-[13px] uppercase tracking-[0.45em] text-[#5fdde8] font-bold">
					Loading Portfolio
				</p>
				<div className="h-1.5 w-full overflow-hidden rounded-full bg-[#fff0a0]">
					<div
						className="h-full rounded-full bg-[#5fdde8] transition-all duration-200 ease-out"
						style={{ width: `${progress}%` }}
					/>
				</div>
				<h1 className="text-2xl text-ctnPrimaryLight font-semibold">{progress}%</h1>
			</div>
		</div>
	);
}

export default CanvasLoader;
