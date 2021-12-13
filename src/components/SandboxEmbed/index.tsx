import React from 'react';
import { SandboxProps } from '@identity/types';
import { SandboxContainer } from './styles';

/*
 autoresize -	Automatically resize the embed to the content (only works on Medium). -	0/1 -	0/*
 codemirror -	Use CodeMirror editor instead of Monaco (decreases embed size significantly). -	0/1 -	0/*
 editorsize -	Size in percentage of editor. -	number -	50/*
 eslint -	Use eslint (increases embed size significantly). -	0/1 -	0/*
 expanddevtools -	Start with the devtools (console) open. -	0/1 -	0/*
 hidedevtools -	Hide the DevTools bar of the preview. -	0/1 -	0/*
 fontsize -	Font size of editor -	number (in px) -	14/*
 forcerefresh -	Force a full refresh of frame after every edit. -	0/1 -	0/*
 hidenavigation -	Hide the navigation bar of the preview. -	0/1 -	0/*
 highlights -	Which lines to highlight (only works in CodeMirror) -	comma separated list of line numbers/*
 initialpath -	Which url to initially load in address bar -	string -	//*
 module -	Which module to open by default. Multiple paths comma separated are allowed, in that case we show them as tabs -	path to module (starting with /) -	entry path/*
 moduleview -	Evaluate the file that is open in the editor. -	0/1 -	0/*
 previewwindow -	Which preview window to open by default -	console/tests/browser -	browser/*
 runonclick -	Only load the preview when the user says so. -	0/1 -	0/*
 view -	Which view to open by default	editor/split/preview	split, preview for small screens/*
 theme -	Which theme to show for the embed -	dark/light -dark
*/

// https://codesandbox.io/embed/new?codemirror=1

const SandboxEmbed = ({ slug, title, description, repo }: SandboxProps) => {
  return (
    <SandboxContainer>
      <h3>{title}</h3>
      <p>{description}</p>
      <iframe
        src={`https://codesandbox.io/embed/${slug}?codemirror=1&autoresize=1`}
        style={{
          width: '100%',
          height: '500px',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />

      {repo && (
        <p>
          <a href={repo} target="_blank" rel="noreferrer">
            See the repo on GitHub
          </a>
        </p>
      )}
    </SandboxContainer>
  );
};

export default SandboxEmbed;
