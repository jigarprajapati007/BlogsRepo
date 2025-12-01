import { Header } from "@/component/common/Header";
import { DeskTop } from "@/component/Desktop/DeskTop";
import { Fragment } from "react";

export default function page() {
  return (
    <Fragment>
      <Header />
      <DeskTop />
    </Fragment>
  );
}
