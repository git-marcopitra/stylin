import Head from 'next/head';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import { Anchor, Box, Typography } from '@/elements';

const DescriptionText: FC<PropsWithChildren> = ({ children }) => (
  <Typography
    m="0"
    p="2rem"
    borderRadius="L"
    border="1px solid"
    position="relative"
  >
    {children}
  </Typography>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        as="main"
        display="flex"
        padding="6rem"
        minHeight="100vh"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          zIndex={2}
          width="100%"
          display="inherit"
          maxWidth="1100px"
          fontSize="0.85rem"
          alignItems="inherit"
          justifyContent="inherit"
          fontFamily="ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace"
        >
          <DescriptionText>
            Get started by editing&nbsp;
            <Typography
              as="code"
              fontWeight="700"
              fontFamily="ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace"
            >
              pages/index.tsx
            </Typography>
          </DescriptionText>
          <Box>
            <Anchor
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              By{' '}
              <Box as="span" filter="invert(1)">
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={100}
                  height={24}
                  priority
                />
              </Box>
            </Anchor>
          </Box>
        </Box>
        <Box>
          <Box width="20rem">
            <svg viewBox="0 0 295 214" width="100%" height="100%" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M172.518 94.1785C167.217 95.0529 163.293 99.0454 160.504 104.082L160.496 104.097L160.488 104.112C157.476 109.642 155.255 116.118 153.75 123.455L153.747 123.47L153.744 123.486C153.477 124.832 153.233 126.155 153.014 127.456C152.827 127.296 152.626 127.144 152.409 127C150.67 125.84 148.615 125.758 147.491 125.758C145.48 125.758 143.095 126.135 141.104 127.657L141.046 127.702L140.989 127.748C140.386 128.238 139.88 128.791 139.455 129.377C139.075 128.65 138.537 127.959 137.802 127.363C135.977 125.847 133.703 125.758 132.617 125.758C130.941 125.758 128.956 125.957 127.157 126.815C126.528 126.297 125.857 125.95 125.205 125.721C127.521 121.634 128.735 117.115 128.735 112.199C128.735 108.991 128.044 105.903 126.322 103.247C124.383 100.259 121.374 98.489 117.705 98.489C113.388 98.489 109.755 100.591 106.867 103.71L106.85 103.728L106.833 103.747C104.115 106.742 101.956 110.569 100.241 115.027C100.156 115.247 100.073 115.469 99.9903 115.691C99.5945 112.761 98.4686 110.058 96.5223 107.734C94.2606 104.98 91.2933 103.051 87.838 101.856C84.5148 100.662 80.9514 100.097 77.197 100.097C72.3018 100.097 67.7917 100.871 63.7857 102.572L63.7742 102.577L63.7627 102.582C59.8203 104.279 56.5504 106.771 54.2 110.146L54.1827 110.17L54.1656 110.195C51.8695 113.579 50.757 117.429 50.757 121.579C50.757 125.509 51.7383 129.177 53.9839 132.282L54.0193 132.33L54.0558 132.379C55.1919 133.872 56.4662 135.204 57.8774 136.364C57.2592 136.258 56.6381 136.21 56.025 136.21C52.8217 136.21 49.9351 137.598 48.0907 140.413C46.4803 142.871 46 145.874 46 148.781C46 154.939 48.501 160.086 53.6722 163.382L53.691 163.394L53.71 163.406C58.3401 166.3 64.1198 167.516 70.631 167.516C77.9866 167.516 84.4487 165.975 89.5328 162.376L89.5416 162.37C92.9464 159.949 95.2742 156.834 96.5398 153.187C97.2346 155.891 98.2815 158.324 99.7604 160.405C103.135 165.152 108.207 167.315 114.087 167.315C117.611 167.315 120.916 166.472 123.873 164.717C124.319 165.102 124.79 165.45 125.287 165.756C124.718 166.316 124.18 166.866 123.675 167.406L123.647 167.436L123.62 167.466C120.863 170.508 118.691 173.479 117.403 176.347L117.386 176.386L117.369 176.425C116.2 179.153 115.557 181.965 115.557 184.827C115.557 188.231 116.668 191.42 119.191 193.882C121.677 196.353 124.854 197.465 128.262 197.465C135.11 197.465 139.97 192.992 143.152 186.795C146.016 181.337 148.24 174.247 149.935 165.704L156.304 161.424C157.419 162.941 158.779 164.244 160.414 165.242C162.532 166.535 164.88 167.178 167.327 167.295C152.277 195.109 122.845 214 89 214C39.8467 214 0 174.153 0 125C0 75.8467 39.8467 36 89 36C127.318 36 159.981 60.2157 172.518 94.1785ZM173.084 147.271C172.736 147.804 172.383 148.336 172.024 148.868C172.324 148.598 172.658 148.277 173.029 147.902C173.045 147.694 173.064 147.484 173.084 147.271ZM142.05 152.579L142.595 149.207C142.047 150.349 141.477 151.402 140.88 152.342L142.05 152.579ZM137.095 150.386C137.094 150.387 137.092 150.374 137.089 150.342C137.094 150.369 137.095 150.384 137.095 150.386ZM119.775 142.625C119.81 142.403 119.847 142.181 119.886 141.958C118.917 142.077 117.935 142.123 116.968 142.123H113.66C113.66 142.2 113.66 142.276 113.66 142.349C113.66 146.826 114.217 148.923 114.588 149.612C114.656 149.72 114.706 149.775 114.73 149.799C114.755 149.823 114.769 149.832 114.782 149.839C114.794 149.846 114.976 149.945 115.494 149.945C116.32 149.945 116.921 149.725 117.491 149.275C117.985 148.887 118.554 148.382 119.2 147.75C119.32 145.971 119.511 144.262 119.775 142.625ZM161.067 158.224C161.66 157.827 162.233 157.362 162.755 156.818ZM82.3 127.477C81.4944 126.188 81.041 124.69 81.041 123.053C81.041 122.026 81.1158 121.011 81.2856 120.021C81.3411 119.458 81.3815 119.012 81.4083 118.673C81.4197 118.528 81.4274 118.417 81.4326 118.337C81.4034 118.319 81.3699 118.3 81.3319 118.28C80.4185 117.79 79.0097 117.4 76.862 117.4C73.5317 117.4 71.7512 118.038 70.8733 118.648L70.864 118.655L70.8545 118.661C70.2671 119.066 70.003 119.454 70.003 120.44C70.003 121.012 70.137 121.291 70.3218 121.519C70.943 122.206 71.7428 122.828 72.7838 123.364C74.1365 124.059 76.1532 124.951 78.9073 126.044L78.9294 126.052L78.9514 126.061C80.1342 126.544 81.2512 127.016 82.3 127.477ZM63.6501 139.891C64.6037 141.235 65.112 142.835 65.112 144.56C65.112 145.563 65.0461 146.563 64.8805 147.527C64.8459 147.903 64.7875 148.258 64.7348 148.541C64.7213 148.723 64.7128 148.92 64.7106 149.133C64.7594 149.163 64.8222 149.198 64.9014 149.237C65.9991 149.756 68.0013 150.213 71.301 150.213C74.5679 150.213 76.4805 149.627 77.5324 148.981C78.2881 148.485 78.428 148.112 78.428 147.441C78.428 147.229 78.3956 147.133 78.3845 147.104C78.3749 147.078 78.3526 147.026 78.2683 146.934L78.234 146.896L78.2005 146.858C77.6997 146.289 77.0241 145.761 76.0877 145.307L76.0331 145.281L75.9792 145.253C74.7155 144.602 72.8135 143.757 70.2003 142.711C67.7642 141.761 65.5745 140.823 63.6501 139.891Z"
                fill="#FF6A6A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M196.881 115.728C202.69 105.298 206 93.2857 206 80.5C206 40.4594 173.541 8 133.5 8C93.4594 8 61 40.4594 61 80.5C61 88.1111 62.1729 95.4482 64.3476 102.341C68.2118 100.8 72.5293 100.097 77.197 100.097C80.9514 100.097 84.5148 100.662 87.838 101.856C91.2933 103.051 94.2606 104.98 96.5223 107.734C98.4686 110.058 99.5945 112.761 99.9903 115.691C100.073 115.469 100.156 115.247 100.241 115.027C101.956 110.569 104.115 106.742 106.833 103.747L106.85 103.728L106.867 103.71C109.755 100.591 113.388 98.489 117.705 98.489C121.374 98.489 124.383 100.259 126.322 103.247C128.044 105.903 128.735 108.991 128.735 112.199C128.735 117.115 127.521 121.634 125.205 125.721C125.857 125.95 126.528 126.297 127.157 126.815C128.956 125.957 130.941 125.758 132.617 125.758C133.703 125.758 135.977 125.847 137.802 127.363C138.537 127.959 139.075 128.65 139.455 129.377C139.88 128.791 140.386 128.238 140.989 127.748L141.046 127.702L141.104 127.657C143.095 126.135 145.48 125.758 147.491 125.758C148.615 125.758 150.67 125.84 152.409 127C152.626 127.144 152.827 127.296 153.014 127.456C153.233 126.155 153.477 124.832 153.744 123.486L153.747 123.47L153.75 123.455C155.255 116.118 157.476 109.642 160.488 104.112L160.496 104.097L160.504 104.082C163.667 98.3694 168.29 94 174.728 94C178.791 94 181.991 96.0691 184.002 99.3783C185.958 102.483 186.629 106.4 186.629 110.524C186.629 110.654 186.628 110.783 186.627 110.914C186.928 110.894 187.231 110.884 187.536 110.884C190.003 110.884 192.519 111.494 194.638 113.153C195.592 113.899 196.334 114.772 196.881 115.728ZM188.001 121.084C188.009 121.075 188.013 121.069 188.014 121.066C188.017 121.062 188.022 121.055 188.029 121.037C188.035 121.024 188.049 120.986 188.063 120.916C187.929 120.898 187.755 120.884 187.536 120.884C186.756 120.884 186.409 121.081 186.167 121.288L186.161 121.293L186.156 121.298C186.152 121.302 186.148 121.305 186.145 121.308C186.299 121.324 186.493 121.336 186.732 121.336C187.571 121.336 187.892 121.163 188.001 121.084ZM142.063 152.5L142.595 149.207C142.047 150.349 141.477 151.402 140.88 152.342L141.805 152.529C141.891 152.52 141.977 152.51 142.063 152.5ZM137.095 150.386C137.094 150.387 137.092 150.374 137.089 150.342C137.094 150.369 137.095 150.384 137.095 150.386ZM82.3 127.477C81.4944 126.188 81.041 124.69 81.041 123.053C81.041 122.026 81.1158 121.011 81.2856 120.021C81.3411 119.458 81.3815 119.012 81.4083 118.673C81.4197 118.528 81.4274 118.417 81.4326 118.337C81.4034 118.319 81.3699 118.3 81.3319 118.28C80.4185 117.79 79.0097 117.4 76.862 117.4C74.2642 117.4 72.6093 117.788 71.5904 118.249C73.0076 120.568 74.5516 122.802 76.2126 124.94C77.0173 125.282 77.9144 125.65 78.9073 126.044L78.9294 126.052L78.9514 126.061C80.1342 126.544 81.2512 127.016 82.3 127.477ZM119.775 142.625C119.81 142.403 119.847 142.181 119.886 141.958C118.917 142.077 117.935 142.123 116.968 142.123H113.66C113.66 142.2 113.66 142.276 113.66 142.349C113.66 146.826 114.217 148.923 114.588 149.612C114.656 149.72 114.706 149.775 114.73 149.799C114.755 149.823 114.769 149.832 114.782 149.839C114.794 149.846 114.976 149.945 115.494 149.945C116.32 149.945 116.921 149.725 117.491 149.275C117.985 148.887 118.554 148.382 119.2 147.75C119.32 145.971 119.511 144.262 119.775 142.625Z"
                fill="#F6B161"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M197.097 120.595C227.443 117.108 251 91.5323 251 60.5C251 27.0868 223.689 0 190 0C156.311 0 129 27.0868 129 60.5C129 81.5733 139.863 100.13 156.339 110.962C157.273 108.54 158.321 106.255 159.488 104.112L159.496 104.097L159.504 104.082C162.667 98.3694 167.29 94 173.728 94C177.791 94 180.991 96.0691 183.002 99.3783C184.958 102.483 185.629 106.4 185.629 110.524C185.629 110.654 185.628 110.783 185.627 110.914C185.928 110.894 186.231 110.884 186.536 110.884C189.003 110.884 191.519 111.494 193.638 113.153C196.044 115.036 197.097 117.722 197.097 120.507C197.097 120.536 197.097 120.566 197.097 120.595ZM187.063 120.916C187.062 120.921 187.061 120.926 187.06 120.931C186.807 120.919 186.553 120.906 186.3 120.891C186.374 120.886 186.453 120.884 186.536 120.884C186.755 120.884 186.929 120.898 187.063 120.916Z"
                fill="#E1F081"
              />
              <path
                d="M70.631 162.516C64.6904 162.516 59.9333 161.399 56.36 159.166C52.7867 156.888 51 153.426 51 148.781C51 146.324 51.4243 144.448 52.273 143.153C53.1217 141.858 54.3723 141.21 56.025 141.21C57.231 141.21 58.2137 141.523 58.973 142.148C59.7323 142.773 60.112 143.577 60.112 144.56C60.112 145.453 60.045 146.235 59.911 146.905C59.911 147.084 59.8663 147.396 59.777 147.843C59.7323 148.29 59.71 148.759 59.71 149.25C59.71 151.26 60.715 152.756 62.725 153.739C64.7797 154.722 67.6384 155.213 71.301 155.213C75.0977 155.213 78.068 154.543 80.212 153.203C82.356 151.818 83.428 149.898 83.428 147.441C83.428 145.922 82.9367 144.627 81.954 143.555C80.9714 142.438 79.743 141.523 78.269 140.808C76.795 140.049 74.718 139.133 72.038 138.061C68.5987 136.721 65.7847 135.448 63.596 134.242C61.452 133.036 59.5983 131.406 58.035 129.351C56.5163 127.252 55.757 124.661 55.757 121.579C55.757 118.363 56.6057 115.504 58.303 113.003C60.045 110.502 62.524 108.559 65.74 107.174C69.0007 105.789 72.8197 105.097 77.197 105.097C80.4577 105.097 83.4504 105.588 86.175 106.571C88.8997 107.509 91.066 108.961 92.674 110.926C94.3267 112.891 95.153 115.303 95.153 118.162C95.153 120.976 94.7287 123.098 93.88 124.527C93.0314 125.956 91.7807 126.671 90.128 126.671C88.9667 126.671 87.984 126.314 87.18 125.599C86.4207 124.884 86.041 124.036 86.041 123.053C86.041 122.204 86.108 121.423 86.242 120.708C86.376 119.368 86.443 118.519 86.443 118.162C86.443 116.286 85.5274 114.857 83.696 113.874C81.8647 112.891 79.5867 112.4 76.862 112.4C73.0207 112.4 70.0727 113.115 68.018 114.544C66.008 115.929 65.003 117.894 65.003 120.44C65.003 122.137 65.5167 123.589 66.544 124.795C67.616 126.001 68.9337 127.006 70.497 127.81C72.0604 128.614 74.249 129.574 77.063 130.691C80.4577 132.076 83.1824 133.326 85.237 134.443C87.2917 135.56 89.0337 137.078 90.463 138.999C91.937 140.92 92.674 143.287 92.674 146.101C92.674 151.372 90.664 155.436 86.644 158.295C82.6687 161.109 77.331 162.516 70.631 162.516ZM127.621 147.039C128.201 147.039 128.648 147.307 128.961 147.843C129.318 148.379 129.497 149.116 129.497 150.054C129.497 151.841 129.072 153.225 128.224 154.208C126.303 156.575 124.204 158.518 121.926 160.037C119.648 161.556 117.035 162.315 114.087 162.315C104.975 162.315 100.419 155.905 100.419 143.086C100.419 141.121 100.486 139.133 100.62 137.123H98.0068C96.6668 137.123 95.7511 136.877 95.2598 136.386C94.8131 135.895 94.5898 135.113 94.5898 134.041C94.5898 131.54 95.5948 130.289 97.6048 130.289H101.424C102.183 125.376 103.344 120.887 104.908 116.822C106.471 112.757 108.347 109.519 110.536 107.107C112.769 104.695 115.159 103.489 117.705 103.489C119.581 103.489 121.055 104.315 122.127 105.968C123.199 107.621 123.735 109.698 123.735 112.199C123.735 119.122 120.831 125.152 115.025 130.289H122.529C123.243 130.289 123.757 130.445 124.07 130.758C124.382 131.071 124.539 131.651 124.539 132.5C124.539 135.582 122.015 137.123 116.968 137.123H108.794C108.704 139.356 108.66 141.098 108.66 142.349C108.66 146.994 109.196 150.255 110.268 152.131C111.384 154.007 113.126 154.945 115.494 154.945C117.414 154.945 119.112 154.364 120.586 153.203C122.06 152.042 123.802 150.3 125.812 147.977C126.348 147.352 126.951 147.039 127.621 147.039ZM115.896 109.921C115.226 109.921 114.466 110.77 113.618 112.467C112.814 114.12 112.032 116.442 111.273 119.435C110.558 122.383 109.955 125.666 109.464 129.284C112.099 127.006 114.064 124.46 115.36 121.646C116.7 118.787 117.37 116.197 117.37 113.874C117.37 111.239 116.878 109.921 115.896 109.921ZM158.345 147.173C158.926 147.173 159.373 147.463 159.685 148.044C160.043 148.58 160.221 149.272 160.221 150.121C160.221 151.148 160.065 151.952 159.752 152.533C159.44 153.114 158.948 153.627 158.278 154.074L145.414 162.717C143.717 171.963 141.484 179.221 138.714 184.492C135.99 189.807 132.506 192.465 128.262 192.465C125.984 192.465 124.131 191.75 122.701 190.321C121.272 188.936 120.557 187.105 120.557 184.827C120.557 182.728 121.026 180.584 121.964 178.395C122.947 176.206 124.734 173.683 127.324 170.824C129.96 168.01 133.667 164.772 138.446 161.109L138.647 159.568C138.96 157.915 139.317 155.548 139.719 152.466C138.826 155.682 137.575 158.139 135.967 159.836C134.359 161.489 132.662 162.315 130.875 162.315C128.865 162.315 127.213 161.399 125.917 159.568C124.667 157.692 124.041 155.369 124.041 152.6C124.041 149.25 124.265 146.19 124.711 143.421C125.158 140.607 125.895 137.637 126.922 134.51C127.369 133.17 127.994 132.21 128.798 131.629C129.602 131.048 130.875 130.758 132.617 130.758C133.6 130.758 134.27 130.914 134.627 131.227C135.029 131.54 135.23 132.009 135.23 132.634C135.23 132.991 134.985 134.197 134.493 136.252C134.047 137.905 133.689 139.401 133.421 140.741C133.064 142.572 132.751 144.337 132.483 146.034C132.215 147.687 132.081 149.049 132.081 150.121C132.081 151.818 132.55 152.667 133.488 152.667C134.158 152.667 134.985 151.997 135.967 150.657C136.995 149.317 138.067 147.285 139.183 144.56C140.345 141.835 141.461 138.485 142.533 134.51C142.891 133.17 143.427 132.21 144.141 131.629C144.901 131.048 146.017 130.758 147.491 130.758C148.519 130.758 149.233 130.892 149.635 131.16C150.037 131.428 150.238 131.875 150.238 132.5C150.238 133.617 149.658 137.458 148.496 144.024L146.754 154.811C150.194 152.22 153.544 149.853 156.804 147.709C157.385 147.352 157.899 147.173 158.345 147.173ZM128.999 185.966C130.116 185.966 131.367 184.671 132.751 182.08C134.136 179.489 135.521 175.179 136.905 169.149C133.466 172.052 130.965 174.688 129.401 177.055C127.883 179.467 127.123 181.566 127.123 183.353C127.123 184.112 127.257 184.738 127.525 185.229C127.838 185.72 128.329 185.966 128.999 185.966ZM181.495 147.039C182.075 147.039 182.522 147.307 182.835 147.843C183.192 148.379 183.371 149.116 183.371 150.054C183.371 151.841 182.946 153.225 182.098 154.208C180.177 156.575 178.078 158.518 175.8 160.037C173.566 161.556 171.02 162.315 168.162 162.315C164.231 162.315 161.305 160.528 159.385 156.955C157.509 153.382 156.571 148.759 156.571 143.086C156.571 137.637 157.263 131.428 158.648 124.46C160.077 117.492 162.154 111.507 164.879 106.504C167.648 101.501 170.931 99 174.728 99C176.872 99 178.547 100.005 179.753 102.015C181.003 103.98 181.629 106.817 181.629 110.524C181.629 115.839 180.155 122.003 177.207 129.016C174.259 136.029 170.261 142.974 165.214 149.853C165.526 151.684 166.04 153.002 166.755 153.806C167.469 154.565 168.407 154.945 169.569 154.945C171.4 154.945 173.008 154.431 174.393 153.404C175.777 152.332 177.542 150.523 179.686 147.977C180.222 147.352 180.825 147.039 181.495 147.039ZM173.254 105.633C172.226 105.633 171.065 107.487 169.77 111.194C168.474 114.901 167.335 119.502 166.353 124.996C165.37 130.49 164.834 135.761 164.745 140.808C167.916 135.582 170.44 130.356 172.316 125.13C174.192 119.859 175.13 115.058 175.13 110.725C175.13 107.33 174.504 105.633 173.254 105.633ZM186.732 126.336C184.856 126.336 183.449 125.912 182.511 125.063C181.573 124.17 181.104 122.941 181.104 121.378C181.104 119.815 181.707 118.519 182.913 117.492C184.164 116.42 185.705 115.884 187.536 115.884C189.189 115.884 190.529 116.286 191.556 117.09C192.584 117.894 193.097 119.033 193.097 120.507C193.097 122.294 192.517 123.723 191.355 124.795C190.194 125.822 188.653 126.336 186.732 126.336ZM186.196 162.315C183.293 162.315 181.171 161.288 179.831 159.233C178.536 157.178 177.888 154.454 177.888 151.059C177.888 149.049 178.134 146.481 178.625 143.354C179.161 140.183 179.831 137.235 180.635 134.51C181.037 133.081 181.573 132.098 182.243 131.562C182.913 131.026 183.985 130.758 185.459 130.758C187.737 130.758 188.876 131.517 188.876 133.036C188.876 134.153 188.452 136.743 187.603 140.808C186.531 145.721 185.995 149.049 185.995 150.791C185.995 152.131 186.174 153.158 186.531 153.873C186.889 154.588 187.492 154.945 188.34 154.945C189.144 154.945 190.149 154.387 191.355 153.27C192.561 152.153 194.169 150.389 196.179 147.977C196.715 147.352 197.318 147.039 197.988 147.039C198.569 147.039 199.016 147.307 199.328 147.843C199.686 148.379 199.864 149.116 199.864 150.054C199.864 151.841 199.44 153.225 198.591 154.208C194.169 159.613 190.038 162.315 186.196 162.315ZM199.201 162.315C197.503 162.315 196.297 161.422 195.583 159.635C194.913 157.848 194.578 154.99 194.578 151.059C194.578 145.252 195.404 139.736 197.057 134.51C197.459 133.215 198.106 132.277 199 131.696C199.938 131.071 201.233 130.758 202.886 130.758C203.779 130.758 204.404 130.87 204.762 131.093C205.119 131.316 205.298 131.741 205.298 132.366C205.298 133.081 204.963 134.689 204.293 137.19C203.846 138.977 203.489 140.54 203.221 141.88C202.953 143.22 202.729 144.873 202.551 146.838C204.025 142.997 205.677 139.87 207.509 137.458C209.34 135.046 211.127 133.326 212.869 132.299C214.655 131.272 216.286 130.758 217.76 130.758C219.189 130.758 220.261 131.138 220.976 131.897C221.735 132.612 222.115 133.684 222.115 135.113C222.115 136.274 221.869 138.463 221.378 141.679C220.931 144.404 220.574 146.994 220.306 149.451C220.038 151.863 219.904 154.565 219.904 157.558C219.904 159.255 219.546 160.484 218.832 161.243C218.162 161.958 217.045 162.315 215.482 162.315C214.008 162.315 212.936 161.935 212.266 161.176C211.596 160.417 211.261 159.278 211.261 157.759C211.261 155.972 211.573 153.024 212.199 148.915C212.735 145.342 213.003 143.064 213.003 142.081C213.003 141.366 212.757 141.009 212.266 141.009C211.685 141.009 210.859 141.768 209.787 143.287C208.759 144.761 207.687 146.726 206.571 149.183C205.499 151.64 204.628 154.23 203.958 156.955C203.466 159.054 202.886 160.484 202.216 161.243C201.59 161.958 200.585 162.315 199.201 162.315ZM231.52 162.315C229.554 162.315 228.058 161.779 227.031 160.707C226.048 159.635 225.557 158.228 225.557 156.486C225.557 154.476 226.115 152.868 227.232 151.662C228.393 150.456 230.001 149.853 232.056 149.853C234.021 149.853 235.495 150.344 236.478 151.327C237.505 152.265 238.019 153.672 238.019 155.548C238.019 157.603 237.438 159.255 236.277 160.506C235.115 161.712 233.53 162.315 231.52 162.315ZM252.413 115.884C254.065 115.884 255.405 116.286 256.433 117.09C257.46 117.894 257.974 119.033 257.974 120.507C257.974 122.294 257.393 123.723 256.232 124.795C255.07 125.822 253.529 126.336 251.609 126.336C249.733 126.336 248.326 125.912 247.388 125.063C246.45 124.17 245.981 122.941 245.981 121.378C245.981 119.815 246.584 118.519 247.79 117.492C249.04 116.42 250.581 115.884 252.413 115.884ZM251.609 130.758C252.949 130.758 253.82 130.959 254.222 131.361C254.668 131.763 254.892 132.321 254.892 133.036C254.892 134.957 254.199 140.428 252.815 149.451C252.636 150.523 252.346 152.421 251.944 155.146C250.291 166.581 247.991 175.648 245.043 182.348C242.095 189.093 238.209 192.465 233.385 192.465C231.062 192.465 229.208 191.75 227.824 190.321C226.394 188.936 225.68 187.105 225.68 184.827C225.68 181.656 226.908 178.261 229.365 174.643C231.821 171.07 236.444 166.648 243.234 161.377L243.703 157.96C244.328 153.672 244.819 149.451 245.177 145.297C245.445 142.885 245.869 139.289 246.45 134.51C246.628 133.215 247.12 132.277 247.924 131.696C248.728 131.071 249.956 130.758 251.609 130.758ZM234.122 185.966C235.283 185.966 236.556 184.648 237.941 182.013C239.325 179.378 240.621 175.134 241.827 169.283C238.432 172.186 235.998 174.799 234.524 177.122C233.005 179.489 232.246 181.566 232.246 183.353C232.246 185.095 232.871 185.966 234.122 185.966ZM271.55 163.789C269.227 163.789 267.441 163.253 266.19 162.181C264.984 161.109 264.381 159.903 264.381 158.563C264.381 157.402 264.805 156.397 265.654 155.548C266.503 154.699 267.753 154.275 269.406 154.275C269.987 154.275 270.657 154.342 271.416 154.476C272.22 154.565 272.823 154.632 273.225 154.677C273.18 153.516 272.912 152.421 272.421 151.394C271.974 150.367 271.394 149.384 270.679 148.446C269.964 147.463 269.294 146.615 268.669 145.9C267.284 148.535 265.9 150.724 264.515 152.466C263.175 154.208 261.701 155.861 260.093 157.424C259.289 158.228 258.44 158.63 257.547 158.63C256.832 158.63 256.252 158.384 255.805 157.893C255.358 157.357 255.135 156.709 255.135 155.95C255.135 155.057 255.448 154.23 256.073 153.471L256.944 152.399C259.401 149.362 261.254 146.86 262.505 144.895C263.309 143.6 264.113 142.059 264.917 140.272C265.766 138.485 266.86 136.051 268.2 132.969C269.049 131.004 270.813 130.021 273.493 130.021C274.744 130.021 275.615 130.133 276.106 130.356C276.597 130.579 276.843 130.937 276.843 131.428C276.843 131.696 276.754 132.12 276.575 132.701C276.396 133.282 276.151 133.862 275.838 134.443C275.034 136.051 274.632 137.413 274.632 138.53C274.632 139.2 274.855 139.937 275.302 140.741C275.793 141.545 276.53 142.55 277.513 143.756C278.942 145.632 280.014 147.24 280.729 148.58C281.488 149.875 281.868 151.305 281.868 152.868C281.868 154.744 281.421 156.531 280.528 158.228C279.679 159.881 278.473 161.221 276.91 162.248C275.347 163.275 273.56 163.789 271.55 163.789Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M279.325 138.523C288.916 130.452 295 118.428 295 105C295 80.6995 275.077 61 250.5 61C225.923 61 206 80.6995 206 105C206 112.998 208.158 120.498 211.93 126.96C213.622 126.233 215.417 125.778 217.279 125.778C219.525 125.778 222.088 126.38 224.046 128.397C226.038 130.351 226.634 132.899 226.634 135.133C226.634 136.603 226.372 138.88 225.952 141.705C227.766 142.894 229.672 143.954 231.659 144.873C234.283 144.887 237.112 145.539 239.311 147.597C239.36 147.61 239.41 147.623 239.459 147.635C239.551 146.716 239.636 145.8 239.714 144.889L239.719 144.827L239.726 144.765C239.997 142.327 240.424 138.71 241.005 133.927L241.01 133.887L241.016 133.847C241.262 132.06 241.946 130.156 243.392 128.64C241.312 126.62 240.5 123.998 240.5 121.398C240.5 118.347 241.762 115.668 244.066 113.706C246.323 111.776 249.055 110.904 251.932 110.904C254.399 110.904 256.914 111.514 259.033 113.173C261.44 115.056 262.493 117.742 262.493 120.527C262.493 123.508 261.468 126.342 259.142 128.489L259.103 128.525L259.064 128.56C258.826 128.77 258.583 128.967 258.334 129.151C259.103 130.387 259.411 131.767 259.411 133.056C259.411 134.456 259.146 137.061 258.655 140.744C259.05 140.004 259.458 139.171 259.877 138.24L259.898 138.193L259.92 138.147C260.733 136.435 261.8 134.062 263.129 131.007C263.962 129.078 265.341 127.471 267.246 126.41C269.076 125.391 271.089 125.041 273.012 125.041C274.276 125.041 276.126 125.112 277.694 125.824C278.566 126.221 279.548 126.888 280.298 127.979C281.068 129.099 281.362 130.33 281.362 131.448C281.362 132.531 281.06 133.582 280.873 134.191C280.6 135.079 280.238 135.933 279.803 136.752C279.516 137.333 279.344 137.78 279.248 138.106C279.224 138.189 279.205 138.26 279.192 138.319C279.233 138.383 279.277 138.451 279.325 138.523ZM250.557 121.313L250.551 121.318C250.547 121.322 250.543 121.325 250.54 121.328C250.694 121.344 250.888 121.356 251.128 121.356C251.963 121.356 252.285 121.184 252.395 121.105C252.404 121.095 252.409 121.089 252.41 121.087C252.413 121.082 252.418 121.075 252.425 121.057C252.43 121.044 252.445 121.006 252.459 120.937C252.324 120.918 252.151 120.904 251.932 120.904C251.151 120.904 250.804 121.101 250.563 121.308L250.557 121.313Z"
                fill="#7CEECC"
              />
            </svg>
          </Box>
        </Box>
        <Typography fontFamily="ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace">
          <Typography as="strong" on-hover={{ color: '#7CEECC' }}>
            Stylin
          </Typography>{' '}
          NextJS example
        </Typography>
      </Box>
    </>
  );
}
