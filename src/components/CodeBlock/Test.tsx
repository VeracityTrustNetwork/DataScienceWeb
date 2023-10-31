import {codes} from './codes.json'


const copyToClipboard = (i=0,j=0)=>{
  navigator.clipboard.writeText(codes[i][j])
}

export const Test1 = () => {
  
  return (
  <article id="block-exercise-1" className="notion-root">

  <div
    id="block-a603e3c93fb246aaa29b961bf6a5f76e"
    className="notion-callout bg-gray-light border"
  >
    <div className="notion-callout__icon">
      <span
        className="notion-icon text"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          fill: "var(--color-text-default-light)"
        }}
      >
        💡
      </span>
    </div>
    <div className="notion-callout__content">
      <span className="notion-semantic-string">
        <span>
          <strong>Veracity </strong>
        </span>
        <span>T</span>
        <span>
          <strong>ip: </strong>
        </span>
        <span>
          You need to know a little context of how to code in Python before you
          get started. But do not worry if you don’t have any. We will try the
          best to help you atleast get started.{" "}
        </span>
      </span>
    </div>
  </div>
  <blockquote
    id="block-363077081cf643db9d1efb15d63f8b4e"
    className="notion-quote"
  >
    <span className="notion-semantic-string">
      <span>
        <strong>Load data and perform some data cleaning tasks</strong>
      </span>
    </span>
  </blockquote>
  <div id="block-0437463fd8554c4b9174d670d9289961" className="notion-text">
    <p className="notion-text__content">
      <span className="notion-semantic-string">
        <span>
          A crucial aspect of Data Science is data cleaning as this ensures that
          the data is in the correct format or data type and does not conatin
          errors. If data is not properly inspected and cleaned before analysis,
          this may result in faulty results. We will begin by loading in some
          real data we have collected at Veracity Trust Network that describes
          how users (both normal human users and malicious bot users) have
          interacted with some of our client's web pages. Loading the data
          should give a dataframe with 74,306 data points and the following
          columns:
        </span>
      </span>
    </p>
  </div>
  <ul className="notion-bulleted-list">
    <li
      id="block-d4483e2d20a64f1ea5725934ea4fb8bf"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>
          <code className="code">totalVisitTim</code>
        </span>
        <span>is the total time spent by the user on the web page</span>
      </span>
    </li>
    <li
      id="block-95f090ecdd2b4897994fcd61b5302b3f"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>
          <code className="code">pagesViewedInVisit</code>
        </span>
        <span> is the number of pages viewed by the user during the visit</span>
      </span>
    </li>
    <li
      id="block-cd9c7c1930ff4fb09b4e5ca46d376e89"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>
          <code className="code">totalActionsCount</code>
        </span>
        <span>
          {" "}
          is the total number of actions (such as mouse clicks or mouse
          movements) performed by the user
        </span>
      </span>
    </li>
    <li
      id="block-6bb3862a8498485a94ed75e0bdab6847"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>
          <code className="code">announcedBot</code>
        </span>
        <span>
          {" "}
          an announced bot is a friendly bot that does not perform malicious
          activities, if this field is not equal to zero it means it is an
          announced bot
        </span>
      </span>
    </li>
    <li
      id="block-16017adb27044920872cfd8e3ef77cc1"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>
          <code className="code">avgActionsPerPage</code>
        </span>
        <span>
          {" "}
          is the average number of actions completed by the user per page
        </span>
      </span>
    </li>
    <li
      id="block-74c16c6ad2894948be3c524f20bac7e9"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>
          <code className="code">avgTimePerPage</code>
        </span>
        <span> the average time spent by the user on a page</span>
      </span>
    </li>
    <li
      id="block-d917d6e46dc54ddd817431e84602dadd"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>
          <code className="code">browser</code>
        </span>
        <span>
          {" "}
          is the browser through which the user is accessing the web page
        </span>
      </span>
    </li>
    <li
      id="block-ed34786493864c18a8025630132a696c"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>
          <code className="code">osType</code>
        </span>
        <span> the operating system the user is utilising</span>
      </span>
    </li>
  </ul>
  <div id="block-7c470de65fe64ae5bbe8cbe5b2d50498" className="notion-divider" />
  <h1 id="block-efa42409b4de40c69f8b0754c6da63b1" className="notion-heading">
    <span
      className="notion-heading__anchor"
      id="efa42409b4de40c69f8b0754c6da63b1"
    />
    <span className="notion-semantic-string">
      <span>💭&nbsp;</span>
      <span>
        <strong>
          1.1 Load the data from Github into a pandas dataframe and check that
          the number of data points and columns are correct.
        </strong>
      </span>
    </span>
  </h1>
  <div
    id="block-d5a181a75aab4971a9a2303dc51b256a"
    className="notion-code no-wrap"
  >
    <button className="notion-code__copy-button" onClick={()=>{copyToClipboard(1,0)}} >
      <svg className="notion-icon notion-icon__copy" viewBox="0 0 14 16">
        <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" />
      </svg>
      Copy
    </button>


    <pre className="language-python" tabIndex={0}>
      <code className="language-python">
        <span className="token comment">
          # Load data into a pandas dataframe
        </span>
        {"\n"}data_df <span className="token operator">=</span> pd
        <span className="token punctuation">.</span>read_csv
        <span className="token punctuation">(</span>
        <span className="token string">
          'Example_Veracity_Data_Anonymised.csv'
        </span>
        <span className="token punctuation">)</span>
        {"\n"}data_df<span className="token punctuation">.</span>shape
      </code>
    </pre>
    <figcaption className="notion-caption">
      <span className="notion-semantic-string" />
    </figcaption>
  </div>
  <h1 id="block-dfb5d4c20b3845e1938decbdcbe658b5" className="notion-heading">
    <span
      className="notion-heading__anchor"
      id="dfb5d4c20b3845e1938decbdcbe658b5"
    />
    <span className="notion-semantic-string">
      <span>💭&nbsp;</span>
      <span>
        <strong>
          1.2 Iterate through the data frame using a "for loop" print the data
          type of the{" "}
        </strong>
      </span>
      <span>
        <code className="code">
          <strong>announcedBot</strong>
        </code>
      </span>
      <span>
        <strong> column for the first 20 rows.</strong>
      </span>
    </span>
  </h1>
  <div
    id="block-71d46f7ab4554317ab7ba1c639752b10"
    className="notion-code no-wrap"
  >
    <button className="notion-code__copy-button "onClick={()=>{copyToClipboard(1,1)}}>
      <svg className="notion-icon notion-icon__copy" viewBox="0 0 14 16">
        <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" />
      </svg>
      Copy
    </button>
    <pre className="language-python" tabIndex={0}>
      <code className="language-python">
        <span className="token keyword">for</span> index
        <span className="token punctuation">,</span> row{" "}
        <span className="token keyword">in</span> data_df
        <span className="token punctuation">[</span>
        <span className="token punctuation">:</span>
        <span className="token number">20</span>
        <span className="token punctuation">]</span>
        <span className="token punctuation">.</span>iterrows
        <span className="token punctuation">(</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"    "}
        <span className="token keyword">print</span>
        <span className="token punctuation">(</span>
        <span className="token builtin">type</span>
        <span className="token punctuation">(</span>row
        <span className="token punctuation">[</span>
        <span className="token string">'announcedBot'</span>
        <span className="token punctuation">]</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">)</span>
      </code>
    </pre>
    <figcaption className="notion-caption">
      <span className="notion-semantic-string" />
    </figcaption>
  </div>
  <h1 id="block-0de888997b394def91c706ce1407ea0a" className="notion-heading">
    <span
      className="notion-heading__anchor"
      id="0de888997b394def91c706ce1407ea0a"
    />
    <span className="notion-semantic-string">
      <span>💭</span>
      <span>
        <strong>
          1.3 Iterate through the data frame and if the data type of a row in
          the{" "}
        </strong>
      </span>
      <span>
        <code className="code">
          <strong>announcedBot</strong>
        </code>
      </span>
      <span>
        <strong>
          {" "}
          column is not equal to '0' (as a string data type) change this to the
          value 1. Finally change the data type of the column to an integer data
          type.
        </strong>
      </span>
    </span>
  </h1>
  <div
    id="block-b5238f8625be496e823c7212b74cd436"
    className="notion-callout bg-gray-light border"
  >
    <div className="notion-callout__icon">
      <span
        className="notion-icon text"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          fill: "var(--color-text-default-light)"
        }}
      >
        💡
      </span>
    </div>
    <div className="notion-callout__content">
      <span className="notion-semantic-string">
        <span>
          Hint: documentation for altering a value in a dataframe can be found{" "}
        </span>
        <span>
          <a
            className="notion-link link"
            href="/e2a914f97c1f44ee9e65712b9d1250d6"
          >
            here
          </a>
        </span>
      </span>
    </div>
  </div>
  <div
    id="block-c53c8954ed9e4374a4a846f081bd73bf"
    className="notion-code no-wrap"
  >
    <button className="notion-code__copy-button " onClick={()=>{copyToClipboard(1,2)}}>
      <svg className="notion-icon notion-icon__copy" viewBox="0 0 14 16">
        <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" />
      </svg>
      Copy
    </button>
    <pre className="language-python" tabIndex={0}>
      <code className="language-python">
        <span className="token keyword">for</span> index
        <span className="token punctuation">,</span> row{" "}
        <span className="token keyword">in</span> data_df
        <span className="token punctuation">.</span>iterrows
        <span className="token punctuation">(</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"    "}
        <span className="token keyword">if</span> row
        <span className="token punctuation">[</span>
        <span className="token string">'announcedBot'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">!=</span>{" "}
        <span className="token string">'0'</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">'announcedBot'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">1</span>
        {"\n"}
        {"        "}
        {"\n"}data_df<span className="token punctuation">[</span>
        <span className="token string">'announcedBot'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span> data_df
        <span className="token punctuation">[</span>
        <span className="token string">'announcedBot'</span>
        <span className="token punctuation">]</span>
        <span className="token punctuation">.</span>astype
        <span className="token punctuation">(</span>
        <span className="token builtin">int</span>
        <span className="token punctuation">)</span>
      </code>
    </pre>
    <figcaption className="notion-caption">
      <span className="notion-semantic-string" />
    </figcaption>
  </div>
</article>

)}

export const Test2 = () => (
  <article id="block-exercise-2" className="notion-root">
  <blockquote
    id="block-1c86434ce29f44c5a7f66950f1db508d"
    className="notion-quote"
  >
    <span className="notion-semantic-string">
      <span>
        <strong>Exploratory Data Analysis</strong>
      </span>
    </span>
  </blockquote>
  <div id="block-b00c3559a54b4224ba659f9419876cbf" className="notion-text">
    <p className="notion-text__content">
      <span className="notion-semantic-string" />
    </p>
  </div>
  <div
    id="block-4ab59a6628b04b8899ae4ac2a3cfbbe5"
    className="notion-column-list"
  >
    <div
      id="block-69d75c5fa31e43f0b6f982a2f514162f"
      className="notion-column"
      style={{ width: "calc((100% - var(--column-spacing) * 1) * 0.5)" }}
    >
      <h3
        id="block-6b978b0137284229b774021a88a0c88c"
        className="notion-heading"
      >
        <span
          className="notion-heading__anchor"
          id="6b978b0137284229b774021a88a0c88c"
        />
        <span className="notion-semantic-string">
          <span>
            Exploratory Data Analysis (EDA) is a crucial step in any Data
            Science project. During this phase, we aim to visualize certain
            aspects of the data to gain a better understanding of its structure.
            This process is important as it guides the selection of Data Science
            techniques to be applied.
          </span>
        </span>
      </h3>
      <div id="block-b4e52663dc724a01842398c79201e44d" className="notion-text">
        <p className="notion-text__content">
          <span className="notion-semantic-string" />
        </p>
      </div>
    </div>
    <div
      id="block-b9e990710599447d8064045f869fd8ee"
      className="notion-column"
      style={{
        width: "calc((100% - var(--column-spacing) * 1) * 0.5)",
        marginInlineStart: "var(--column-spacing)"
      }}
    >
      <div
        id="block-50204e91ae6d4670a47891dbb1de0907"
        className="notion-image align-start page-width"
      >
        <picture>
          <source
            srcSet="https://assets.super.so/7f1d6077-b4fa-4561-b572-948569b03fde/images/279cc022-61b7-497e-ab57-41c64771e0fd.jpg?w=750&f=webp"
            media="(max-width: 546px)"
            type="image/webp"
          />
          <source
            src="https://assets.super.so/7f1d6077-b4fa-4561-b572-948569b03fde/images/279cc022-61b7-497e-ab57-41c64771e0fd.jpg?w=750"
            media="(max-width: 546px)"
          />
          <source
            srcSet="https://assets.super.so/7f1d6077-b4fa-4561-b572-948569b03fde/images/279cc022-61b7-497e-ab57-41c64771e0fd.jpg?w=1500&f=webp"
            type="image/webp"
          />
          <img
            src="https://assets.super.so/7f1d6077-b4fa-4561-b572-948569b03fde/images/279cc022-61b7-497e-ab57-41c64771e0fd.jpg?w=1500"
            alt="image"
            width={1500}
            loading="lazy"
            style={{ width: "100%", maxWidth: "100%", display: "block" }}
          />
        </picture>
      </div>
    </div>
  </div>
  <div id="block-3ba92b7688bf48c596535b43d068931c" className="notion-divider" />
  <h1 id="block-0244b45d952b40429aad3f5595cc2127" className="notion-heading">
    <span
      className="notion-heading__anchor"
      id="0244b45d952b40429aad3f5595cc2127"
    />
    <span className="notion-semantic-string">
      <span>💭&nbsp;</span>
      <span>
        <strong>2.1 Use the </strong>
      </span>
      <span>
        <code className="code">
          <strong>.describe()</strong>
        </code>
      </span>
      <span>
        <strong>
          {" "}
          method on the dataframe to give a statistical breakdown of the data
        </strong>
      </span>
    </span>
  </h1>
  <div
    id="block-0357e9e26c4a4b0aa9db80cfbe8f20dc"
    className="notion-code no-wrap"
  >
    <button className="notion-code__copy-button" onClick={()=>{copyToClipboard(2,0)}}>
      <svg className="notion-icon notion-icon__copy" viewBox="0 0 14 16">
        <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" />
      </svg>
      Copy
    </button>
    <pre className="language-python" tabIndex={0}>
      <code className="language-python">
        data_df<span className="token punctuation">.</span>describe
        <span className="token punctuation">(</span>
        <span className="token punctuation">)</span>
      </code>
    </pre>
    <figcaption className="notion-caption">
      <span className="notion-semantic-string" />
    </figcaption>
  </div>
  <h1 id="block-d429a31fa59b47588fa7e42a77b634ac" className="notion-heading">
    <span
      className="notion-heading__anchor"
      id="d429a31fa59b47588fa7e42a77b634ac"
    />
    <span className="notion-semantic-string">
      <span>💭&nbsp;</span>
      <span>
        <strong>2.2 Plot histograms of the columns </strong>
      </span>
      <span>
        <code className="code">
          <strong>totalVisitTime</strong>
        </code>
      </span>
      <span>
        <strong>, </strong>
      </span>
      <span>
        <code className="code">
          <strong>pagesViewedInVisit </strong>
        </code>
      </span>
      <span>
        <strong>and </strong>
      </span>
      <span>
        <code className="code">
          <strong>totalActionsCount</strong>
        </code>
      </span>
      <span>
        <strong>
          . Specify the number of bins for each graph to be 100 bins to get a
          better view of the distribution.
        </strong>
      </span>
    </span>
  </h1>
  <div
    id="block-6de2d230d8b84ae8b627c1fef970f4e1"
    className="notion-callout bg-gray-light border"
  >
    <div className="notion-callout__icon">
      <span
        className="notion-icon text"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          fill: "var(--color-text-default-light)"
        }}
      >
        💡
      </span>
    </div>
    <div className="notion-callout__content">
      <span className="notion-semantic-string">
        <span>
          the matplotlib package (imported here under the name plt) has a
          histogram plotting function
        </span>
      </span>
    </div>
  </div>
  <div
    id="block-d3d65d9fa4f64bd6b20f3347bddb7d01"
    className="notion-code no-wrap"
  >
    <button className="notion-code__copy-button" onClick={()=>{copyToClipboard(2,1)}}>
      <svg className="notion-icon notion-icon__copy" viewBox="0 0 14 16">
        <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" />
      </svg>
      Copy
    </button>
    <pre className="language-python" tabIndex={0}>
      <code className="language-python">
        columns_to_plot <span className="token operator">=</span>{" "}
        <span className="token punctuation">[</span>
        <span className="token string">"totalVisitTime"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"pagesViewedInVisit"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"totalActionsCount"</span>
        <span className="token punctuation">]</span>
        {"\n"}
        <span className="token keyword">for</span> column{" "}
        <span className="token keyword">in</span> columns_to_plot
        <span className="token punctuation">:</span> {"\n"}
        {"    "}plt<span className="token punctuation">.</span>hist
        <span className="token punctuation">(</span>data_df
        <span className="token punctuation">[</span>column
        <span className="token punctuation">]</span>
        <span className="token punctuation">,</span> bins
        <span className="token operator">=</span>
        <span className="token number">100</span>
        <span className="token punctuation">)</span>
        {"\n"}
        {"    "}plt<span className="token punctuation">.</span>title
        <span className="token punctuation">(</span>
        <span className="token string-interpolation">
          <span className="token string">f'Histogram of </span>
          <span className="token interpolation">
            <span className="token punctuation">{"{"}</span>column
            <span className="token punctuation">{"}"}</span>
          </span>
          <span className="token string">'</span>
        </span>
        <span className="token punctuation">)</span>
        {"\n"}
        {"    "}plt<span className="token punctuation">.</span>xlabel
        <span className="token punctuation">(</span>
        <span className="token string-interpolation">
          <span className="token string">f'</span>
          <span className="token interpolation">
            <span className="token punctuation">{"{"}</span>column
            <span className="token punctuation">{"}"}</span>
          </span>
          <span className="token string">'</span>
        </span>
        <span className="token punctuation">)</span>
        {"\n"}
        {"    "}plt<span className="token punctuation">.</span>ylabel
        <span className="token punctuation">(</span>
        <span className="token string">'Frequency'</span>
        <span className="token punctuation">)</span>
        {"\n"}
        {"    "}plt<span className="token punctuation">.</span>show
        <span className="token punctuation">(</span>
        <span className="token punctuation">)</span>
      </code>
    </pre>
    <figcaption className="notion-caption">
      <span className="notion-semantic-string" />
    </figcaption>
  </div>
</article>

);

export const Test3 = () => (
<article id="block-exercise-3" className="notion-root">
  <blockquote
    id="block-566a6d82e3d34be6a1e15770227b0662"
    className="notion-quote"
  >
    <span className="notion-semantic-string">
      <span>
        <strong>Bot classification</strong>
      </span>
    </span>
  </blockquote>
  <div id="block-76cd288fee534ad0a41f55d987bedc4b" className="notion-text">
    <p className="notion-text__content">
      <span className="notion-semantic-string" />
    </p>
  </div>
  <div
    id="block-9b181734e97a44398c1f766d63450dc2"
    className="notion-column-list"
  >
    <div
      id="block-594ce1d9b58144d0b47601db662ea272"
      className="notion-column"
      style={{ width: "calc((100% - var(--column-spacing) * 1) * 0.5)" }}
    >
      <div id="block-a8264ff839594e998a60a23bcf8d6ccb" className="notion-text">
        <p className="notion-text__content">
          <span className="notion-semantic-string">
            <span>
              Finally, we attempt to use some simple logic to classify users as
              either malicious bots or humans and announced bots. At Veracity
              Trust Network we help our clients by accurately identifying
              malicious bots from their website to reduce the likelihood of
              attacks. We do this using a variety of techniques, including
              Machine Learning. Here we attempt to use some simple logic based
              on the information we have available to classify users as either
              malicious bots or humans and announced bots. We can do this by
              programtically encoding behviours we use top differentiate bots
              and humans. For example, we have observed that malicious bots do
              not perform many actions on web pages.
            </span>
          </span>
        </p>
      </div>
      <div id="block-c7d08fcea71d49d997b49f341608bb7f" className="notion-text">
        <p className="notion-text__content">
          <span className="notion-semantic-string" />
        </p>
      </div>
    </div>
    <div
      id="block-9c68ab2e984d42a884afb1967ae50e15"
      className="notion-column"
      style={{
        width: "calc((100% - var(--column-spacing) * 1) * 0.5)",
        marginInlineStart: "var(--column-spacing)"
      }}
    >
      <div
        id="block-eb09ed59b6cb4b94b40cbea114a7b4ff"
        className="notion-image align-start page-width"
      >
        <picture>
          <img
            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d40b25d7-f9b5-4883-b1a3-f0fe756fb8cd/giphy/public"
            alt="image"
            width={1500}
            loading="lazy"
            style={{ width: "100%", maxWidth: "100%", display: "block" }}
          />
        </picture>
      </div>
    </div>
  </div>
  <div id="block-5e1bbf79d1bc4a2e84988ca370981955" className="notion-divider" />
  <h1 id="block-9ffca16cd223432f92b5667f4d2471de" className="notion-heading">
    <span
      className="notion-heading__anchor"
      id="9ffca16cd223432f92b5667f4d2471de"
    />
    <span className="notion-semantic-string">
      <span>💭&nbsp;</span>
      <span>
        <strong>
          3.1 Add the following empty columns to the dataframe containing the
          user data:{" "}
        </strong>
      </span>
    </span>
  </h1>
  <div id="block-f5c9d877803740659d160316f125696d" className="notion-text">
    <p className="notion-text__content">
      <span className="notion-semantic-string" />
    </p>
  </div>
  <div id="block-0f2b734fb4234129bc8b44b9d47d365d" className="notion-to-do">
    <div className="notion-to-do__content">
      <div className="notion-to-do__icon">
        <div className="notion-checkbox">
          <svg viewBox="0 0 16 16">
            <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z" />
          </svg>
        </div>
      </div>
      <div className="notion-to-do__title">
        <span className="notion-semantic-string">
          <span>
            <strong>Visit Time Flag</strong>
          </span>
        </span>
      </div>
    </div>
  </div>
  <div id="block-db91c6ef6eaf4b3695ebd7bebf772870" className="notion-to-do">
    <div className="notion-to-do__content">
      <div className="notion-to-do__icon">
        <div className="notion-checkbox">
          <svg viewBox="0 0 16 16">
            <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z" />
          </svg>
        </div>
      </div>
      <div className="notion-to-do__title">
        <span className="notion-semantic-string">
          <span>
            <strong>Pages Viewed Flag</strong>
          </span>
        </span>
      </div>
    </div>
  </div>
  <div id="block-2f21ce6359b042b99985f8f8abe182a5" className="notion-to-do">
    <div className="notion-to-do__content">
      <div className="notion-to-do__icon">
        <div className="notion-checkbox">
          <svg viewBox="0 0 16 16">
            <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z" />
          </svg>
        </div>
      </div>
      <div className="notion-to-do__title">
        <span className="notion-semantic-string">
          <span>
            <strong>Actions Performed Flag</strong>
          </span>
        </span>
      </div>
    </div>
  </div>
  <div id="block-cba8fab1d59c4541ba2b379945d39c8d" className="notion-to-do">
    <div className="notion-to-do__content">
      <div className="notion-to-do__icon">
        <div className="notion-checkbox">
          <svg viewBox="0 0 16 16">
            <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z" />
          </svg>
        </div>
      </div>
      <div className="notion-to-do__title">
        <span className="notion-semantic-string">
          <span>
            <strong>Browser Flag</strong>
          </span>
        </span>
      </div>
    </div>
  </div>
  <div id="block-adaa0cc1d15d40179112cac579e84f7c" className="notion-to-do">
    <div className="notion-to-do__content">
      <div className="notion-to-do__icon">
        <div className="notion-checkbox">
          <svg viewBox="0 0 16 16">
            <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z" />
          </svg>
        </div>
      </div>
      <div className="notion-to-do__title">
        <span className="notion-semantic-string">
          <span>
            <strong>Malicious Bot Prediction</strong>
          </span>
        </span>
      </div>
    </div>
  </div>
  <div id="block-5de626a64fdb47a6841514d60f7e1db0" className="notion-text">
    <p className="notion-text__content">
      <span className="notion-semantic-string" />
    </p>
  </div>
  <div id="block-4b6aff9e9b4246249c1a025712a491b1" className="notion-text">
    <p className="notion-text__content">
      <span className="notion-semantic-string">
        <span>
          <strong>Assign placeholder values of 0 to above columns</strong>
        </span>
      </span>
    </p>
  </div>
  <div
    id="block-963df62b81b74a33bd83465ad5a19bb6"
    className="notion-code no-wrap"
  >
    <button className="notion-code__copy-button " onClick={()=>{copyToClipboard(3,0)}}>
      <svg className="notion-icon notion-icon__copy" viewBox="0 0 14 16">
        <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" />
      </svg>
      Copy
    </button>
    <pre className="language-python" tabIndex={0}>
      <code className="language-python">
        data_df<span className="token punctuation">[</span>
        <span className="token string">"Visit Time Flag"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">0</span>
        {"\n"}data_df<span className="token punctuation">[</span>
        <span className="token string">"Pages Viewed Flag"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">0</span>
        {"\n"}data_df<span className="token punctuation">[</span>
        <span className="token string">"Actions Performed Flag"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">0</span>
        {"\n"}data_df<span className="token punctuation">[</span>
        <span className="token string">"Browser Flag"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">0</span>
        {"\n"}data_df<span className="token punctuation">[</span>
        <span className="token string">"Malicious Bot Prediction (%)"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">0</span>
      </code>
    </pre>
    <figcaption className="notion-caption">
      <span className="notion-semantic-string" />
    </figcaption>
  </div>
  <h1 id="block-76e89b215fe14efba01f64bb41b4317f" className="notion-heading">
    <span
      className="notion-heading__anchor"
      id="76e89b215fe14efba01f64bb41b4317f"
    />
    <span className="notion-semantic-string">
      <span>💭&nbsp;3</span>
      <span>
        <strong>
          .2 Iterate through the dataframe and assign a flag value of 1 to the
          flag columns using the following logic:
        </strong>
      </span>
    </span>
  </h1>
  <ul className="notion-bulleted-list">
    <li
      id="block-24686b0ce25f4a60ba5ad080c1714cae"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>If </span>
        <span>
          <code className="code">totalVisitTime = 0</code>
        </span>
        <span>, then assign a value of 1 to the "Visit Time Flag" column</span>
      </span>
    </li>
    <li
      id="block-edac4f53906c4dfdacafb9b14c8397de"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>If </span>
        <span>
          <code className="code">pagesViewedInVisit = 1</code>
        </span>
        <span>
          , then assign a value of 1 to the "Pages Viewed Flag" column
        </span>
      </span>
    </li>
    <li
      id="block-5ff9fd32b9984adc91dfba71a58a7b88"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>If </span>
        <span>
          <code className="code">totalActionsCount = 0,</code>
        </span>
        <span>
          {" "}
          then assign a value of 1 to the "Actions Performed Flag" column
        </span>
      </span>
    </li>
    <li
      id="block-1632686e237741699bb4a512e3f019c2"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>
          If browser is not equal to "Chrome", "Safari", "Firefox", "Chromium",
          "Netscape", "Microsoft Internet Explorer" or "Google Chrome", then
          assign a value of 1 to the{" "}
        </span>
        <span>
          <code className="code">browser</code>
        </span>
        <span> column</span>
      </span>
    </li>
  </ul>
  <div
    id="block-e5299e02195440d48e2580fff4e9f1ee"
    className="notion-callout bg-gray-light border"
  >
    <div className="notion-callout__icon">
      <span
        className="notion-icon text"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          fill: "var(--color-text-default-light)"
        }}
      >
        💡
      </span>
    </div>
    <div className="notion-callout__content">
      <span className="notion-semantic-string">
        <span>
          Use a series of "if" statements within the for loop to encode each of
          these logic statements. Documentation for if statements in Python is
          provided{" "}
        </span>
        <span>
          <a
            href="https://www.w3schools.com/python/gloss_python_if_statement.asp"
            className="notion-link link"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </span>
      </span>
    </div>
  </div>
  <div
    id="block-05b0219d2fa942bd8ae7c3cab35b3bc2"
    className="notion-code no-wrap"
  >
    <button className="notion-code__copy-button" onClick={()=>{copyToClipboard(3,1)}}>
      <svg className="notion-icon notion-icon__copy" viewBox="0 0 14 16">
        <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" />
      </svg>
      Copy
    </button>
    <pre className="language-python" tabIndex={0}>
      <code className="language-python">
        <span className="token keyword">for</span> index
        <span className="token punctuation">,</span> row{" "}
        <span className="token keyword">in</span> data_df
        <span className="token punctuation">.</span>iterrows
        <span className="token punctuation">(</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"    "}
        <span className="token keyword">if</span> row
        <span className="token punctuation">[</span>
        <span className="token string">'totalVisitTime'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">==</span>{" "}
        <span className="token number">0</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">'Visit Time Flag'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">1</span>
        {"\n"}
        {"    "}
        <span className="token keyword">if</span> row
        <span className="token punctuation">[</span>
        <span className="token string">'pagesViewedInVisit'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">==</span>{" "}
        <span className="token number">1</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">'Pages Viewed Flag'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">1</span>
        {"\n"}
        {"    "}
        <span className="token keyword">if</span> row
        <span className="token punctuation">[</span>
        <span className="token string">'totalActionsCount'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">==</span>{" "}
        <span className="token number">0</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">'Actions Performed Flag'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">1</span>
        {"\n"}
        {"    "}
        <span className="token keyword">if</span> row
        <span className="token punctuation">[</span>
        <span className="token string">'browser'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token keyword">not</span>{" "}
        <span className="token keyword">in</span>{" "}
        <span className="token punctuation">[</span>
        <span className="token string">"Chrome"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Safari"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Firefox"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Chromium"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Netscape"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Microsoft Internet Explorer"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Google Chrome"</span>
        <span className="token punctuation">]</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">'Browser Flag'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">1</span>
        {"\n"}
        {"        "}
        {"\n"}data_df
      </code>
    </pre>
    <figcaption className="notion-caption">
      <span className="notion-semantic-string" />
    </figcaption>
  </div>
  <h1 id="block-93ee5c0b987f4e40b5b97f86c5a299ac" className="notion-heading">
    <span
      className="notion-heading__anchor"
      id="93ee5c0b987f4e40b5b97f86c5a299ac"
    />
    <span className="notion-semantic-string">
      <span>💭&nbsp;</span>
      <span>
        <strong>
          3.3 Assign values to the "Malicious Bot Prediction" column using the
          following logic{" "}
        </strong>
      </span>
    </span>
  </h1>
  <ul className="notion-bulleted-list">
    <li
      id="block-1209ec7cba6f44f0a625d628b417e7b9"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>If the </span>
        <span>
          <code className="code">announcedBot</code>
        </span>
        <span> column equals 1, assign a value of 0</span>
      </span>
    </li>
    <li
      id="block-c25825a287b2439d89956bfc544c8cc1"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>If all 4 flag columns are flagged, assign a value of 100</span>
      </span>
    </li>
    <li
      id="block-c93b3db796004d6ebe50c042b69decbe"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>If 3 flag columns are flagged, assign a value of 75</span>
      </span>
    </li>
    <li
      id="block-9b5410d46f6f48049ca2fef34a0e8b2d"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>If 2 flag columns are flagged, assign a value of 50</span>
      </span>
    </li>
    <li
      id="block-3de62d144ce74a778bad4adb9a7bd68a"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>If 1 flag columns are flagged, assign a value of 25</span>
      </span>
    </li>
    <li
      id="block-74a9a340fd724fa2aae65b1b1b0020c7"
      className="notion-list-item"
    >
      <span className="notion-semantic-string">
        <span>If no flag columns are flagged, assign a value of 0</span>
      </span>
    </li>
  </ul>
  <div
    id="block-cd61011aed9c4e11b1a16aaa8873ff39"
    className="notion-callout bg-gray-light border"
  >
    <div className="notion-callout__icon">
      <span
        className="notion-icon text"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          fill: "var(--color-text-default-light)"
        }}
      >
        💡
      </span>
    </div>
    <div className="notion-callout__content">
      <span className="notion-semantic-string">
        <span>
          Use a series of "if" statements within the for loop to encode each of
          these logic statements. Documentation for if statements in Python is
          provided{" "}
        </span>
        <span>
          <a
            href="https://www.w3schools.com/python/gloss_python_if_statement.asp"
            className="notion-link link"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </span>
      </span>
    </div>
  </div>
  <div
    id="block-9fc393d6ac534e90b7a6cd0813067975"
    className="notion-code no-wrap"
  >
    <button className="notion-code__copy-button" onClick={()=>{
      copyToClipboard(3,2)
    }} >
      <svg className="notion-icon notion-icon__copy" viewBox="0 0 14 16">
        <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" />
      </svg>
      Copy
    </button>
    <pre className="language-python" tabIndex={0}>
      <code className="language-python">
        <span className="token keyword">for</span> index
        <span className="token punctuation">,</span> row{" "}
        <span className="token keyword">in</span> data_df
        <span className="token punctuation">.</span>iterrows
        <span className="token punctuation">(</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"    "}flag_count <span className="token operator">=</span> row
        <span className="token punctuation">[</span>
        <span className="token string">"Visit Time Flag"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">+</span> row
        <span className="token punctuation">[</span>
        <span className="token string">"Pages Viewed Flag"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">+</span> row
        <span className="token punctuation">[</span>
        <span className="token string">"Actions Performed Flag"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">+</span> row
        <span className="token punctuation">[</span>
        <span className="token string">"Browser Flag"</span>
        <span className="token punctuation">]</span>
        {"\n"}
        {"    "}
        <span className="token keyword">if</span> row
        <span className="token punctuation">[</span>
        <span className="token string">'announcedBot'</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">==</span>{" "}
        <span className="token number">1</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Malicious Bot Prediction (%)"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">0</span>
        {"\n"}
        {"    "}
        <span className="token keyword">elif</span> flag_count{" "}
        <span className="token operator">==</span>{" "}
        <span className="token number">4</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Malicious Bot Prediction (%)"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">100</span>
        {"\n"}
        {"    "}
        <span className="token keyword">elif</span> flag_count{" "}
        <span className="token operator">==</span>{" "}
        <span className="token number">3</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Malicious Bot Prediction (%)"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">75</span>
        {"\n"}
        {"    "}
        <span className="token keyword">elif</span> flag_count{" "}
        <span className="token operator">==</span>{" "}
        <span className="token number">2</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Malicious Bot Prediction (%)"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">50</span>
        {"\n"}
        {"    "}
        <span className="token keyword">elif</span> flag_count{" "}
        <span className="token operator">==</span>{" "}
        <span className="token number">1</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Malicious Bot Prediction (%)"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">25</span>
        {"\n"}
        {"    "}
        <span className="token keyword">else</span>
        <span className="token punctuation">:</span>
        {"\n"}
        {"        "}data_df<span className="token punctuation">.</span>at
        <span className="token punctuation">[</span>index
        <span className="token punctuation">,</span>{" "}
        <span className="token string">"Malicious Bot Prediction (%)"</span>
        <span className="token punctuation">]</span>{" "}
        <span className="token operator">=</span>{" "}
        <span className="token number">0</span>
        {"\n"}
        {"        "}
        {"\n"}data_df
      </code>
    </pre>
    <figcaption className="notion-caption">
      <span className="notion-semantic-string" />
    </figcaption>
  </div>
</article>
)


export const Test = {
  1: <Test1 />,
  2: <Test2 />,
  3: <Test3 />
}