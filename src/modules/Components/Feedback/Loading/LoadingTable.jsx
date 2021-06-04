/* ANCHOR: 📚 Lib imports. */
import ContentLoader from "react-content-loader";

export function LoadingTable({ props }) {
  return (
    <>
      <ContentLoader
        speed={1}
        style={{ width: "100%", height: 357, margin: 0 }}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="27" y="109" rx="4" ry="4" width="20" height="20" />
        <rect x="67" y="110" rx="10" ry="10" width="85" height="19" />
        <rect x="188" y="111" rx="10" ry="10" width="169" height="19" />
        <rect x="402" y="110" rx="10" ry="10" width="85" height="19" />
        <rect x="523" y="111" rx="10" ry="10" width="169" height="19" />
        <rect x="731" y="109" rx="10" ry="10" width="85" height="19" />
        <rect x="852" y="108" rx="10" ry="10" width="85" height="19" />

        <rect x="26" y="166" rx="4" ry="4" width="20" height="20" />
        <rect x="66" y="167" rx="10" ry="10" width="85" height="19" />
        <rect x="187" y="168" rx="10" ry="10" width="169" height="19" />
        <rect x="401" y="167" rx="10" ry="10" width="85" height="19" />
        <rect x="522" y="168" rx="10" ry="10" width="169" height="19" />
        <rect x="730" y="166" rx="10" ry="10" width="85" height="19" />
        <rect x="851" y="165" rx="10" ry="10" width="85" height="19" />

        <rect x="26" y="228" rx="4" ry="4" width="20" height="20" />
        <rect x="66" y="229" rx="10" ry="10" width="85" height="19" />
        <rect x="187" y="230" rx="10" ry="10" width="169" height="19" />
        <rect x="401" y="229" rx="10" ry="10" width="85" height="19" />
        <rect x="522" y="230" rx="10" ry="10" width="169" height="19" />
        <rect x="730" y="228" rx="10" ry="10" width="85" height="19" />
        <rect x="851" y="227" rx="10" ry="10" width="85" height="19" />

        <rect x="26" y="286" rx="4" ry="4" width="20" height="20" />
        <rect x="66" y="287" rx="10" ry="10" width="85" height="19" />
        <rect x="187" y="288" rx="10" ry="10" width="169" height="19" />
        <rect x="401" y="287" rx="10" ry="10" width="85" height="19" />
        <rect x="522" y="288" rx="10" ry="10" width="169" height="19" />
        <rect x="730" y="286" rx="10" ry="10" width="85" height="19" />
        <rect x="851" y="285" rx="10" ry="10" width="85" height="19" />

        <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
        <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
        <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
        <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
        <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
        <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
        <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />

        <rect x="978" y="108" rx="10" ry="10" width="169" height="19" />
        <rect x="977" y="165" rx="10" ry="10" width="169" height="19" />
        <rect x="977" y="227" rx="10" ry="10" width="169" height="19" />
        <rect x="977" y="285" rx="10" ry="10" width="169" height="19" />
        <rect x="977" y="378" rx="10" ry="10" width="169" height="19" />

        <rect x="26" y="20" rx="5" ry="5" width="153" height="30" />
      </ContentLoader>
    </>
  );
}
