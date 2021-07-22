import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
const Comments = dynamic(() => import("../components/Comments"));

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  console.log(inView);

  return (
    <>
      {/* adding some height so we have to scroll down */}
      <div style={{ minHeight: '1000px' }}>Scroll Down</div>

      {/* bind the observe to this ref so we can watch this element entering/exiting the viewport */}
      {/* when this comes into view, inView will be true */}
      <div ref={observe}>
        {/* comments will load when inView is true */}
        {inView && <Comments />}
      </div>
    </>
  );
}
