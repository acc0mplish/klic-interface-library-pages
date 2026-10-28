// Generated from config/public-metadata.json, the live package/registry evidence and OpenAPI.
export const PUBLIC_METADATA={
  "site": {
    "name": "KLIC Interface Library",
    "title": "KLIC — Interface Library",
    "origin": "https://design.klic.co.kr",
    "locales": [
      "ko",
      "en"
    ],
    "defaultLocale": "ko",
    "localeNames": {
      "ko": "한국어",
      "en": "English"
    }
  },
  "toolchain": {
    "bun": "1.4.2",
    "nodeMinimum": "22"
  },
  "package": {
    "name": "klic-interface-library",
    "version": "0.0.1",
    "published": false,
    "status": "source-ready",
    "registry": "https://registry.npmjs.org/",
    "runtime": "Bun 1.4.2 preferred; Node.js 22+ supported",
    "exports": [
      "tokens",
      "theme",
      "CSS",
      "TypeScript",
      "CLI"
    ],
    "buildCommand": "bun run pack:npm"
  },
  "versions": {
    "toolkit": "0.0.1",
    "api": "1.0.0",
    "registrySchema": "1.0",
    "designSystemSchema": "1.0",
    "designContractSchema": "1.0",
    "themeSchema": "1.0",
    "bundleSchema": "1.0",
    "previewDependencySchema": "1.0",
    "compositionExportSchema": "1.0",
    "openapi": "3.1.0",
    "mcpProtocols": [
      "2026-07-28",
      "2025-11-25"
    ]
  },
  "routes": {
    "mcp": "https://design.klic.co.kr/api/v1/mcp",
    "cli": "/klic-interface-library-pages/integrations/klic.mjs"
  },
  "integrations": {
    "api": {
      "status": "available",
      "transport": "http-json",
      "methods": [
        "GET"
      ],
      "serverFiltering": true,
      "authentication": "public",
      "writes": false
    },
    "cli": {
      "status": "available",
      "runtime": {
        "preferred": "bun",
        "compatible": [
          "node"
        ]
      }
    },
    "mcp": {
      "status": "remote-and-stdio",
      "authentication": "public-design-read-only",
      "managedAuthentication": "Sites personal plugin"
    },
    "webmcp": {
      "status": "feature-detected",
      "interface": "document.modelContext",
      "scope": "current browser tab"
    },
    "themes": {
      "status": "available",
      "packageMode": "standalone-theme-kit"
    }
  },
  "rateLimit": {
    "windowSeconds": 60,
    "by": "IP",
    "limits": {
      "api": 120,
      "mcp": 60,
      "download": 2000
    },
    "unlimited": "Server-allowlisted secret key via X-KLIC-API-Key; CLI uses KLIC_API_KEY.",
    "response": 429,
    "retryHeader": "Retry-After",
    "offline": "Local copies and already-loaded stdio/WebMCP operations are not server-rate-limited."
  },
  "delivery": {
    "type": "reference-library",
    "summary": "HTML 데모 라이브러리·4계층 토큰 레지스트리·공개 조회 API와 개발 도구",
    "enSummary": "HTML demo library, four-layer token registry, public read APIs and developer tools",
    "sourceDelivery": "Standalone reference workspaces delivered by CLI; review dependencies and adapt to your product.",
    "licensing": {
      "mode": "per-file",
      "guide": "/klic-interface-library-pages/licenses/README.md"
    },
    "figma": {
      "delivery": "manifest-and-migration-guide",
      "manifest": "/klic-interface-library-pages/design-contract/materials/figma-manifest.json",
      "guide": "/klic-interface-library-pages/design-contract/materials/figma-migration.md",
      "liveSync": false
    },
    "sourceRepository": {
      "status": "not-declared",
      "delivery": "Use the published source exports and verified CLI bundles."
    },
    "versioning": {
      "toolkit": "CLI and shared integration runtime version; initial value tracks the package release",
      "schema": "Response format version",
      "release": "Registry publication hash",
      "revision": "Design criteria hash"
    }
  },
  "links": {
    "deliveryScope": "https://design.klic.co.kr/about",
    "licenses": "/klic-interface-library-pages/licenses/README.md",
    "figma": "/klic-interface-library-pages/design-contract/materials/figma-migration.md",
    "designSystem": "/klic-interface-library-pages/api/v1/design-system.json",
    "designDocs": "/klic-interface-library-pages/#docs/architecture",
    "themes": "/klic-interface-library-pages/api/v1/themes.json",
    "themeGuide": "https://design.klic.co.kr/resources/cli#themes",
    "docs": "https://design.klic.co.kr/resources",
    "api": "https://design.klic.co.kr/resources/api",
    "cli": "https://design.klic.co.kr/resources/cli",
    "mcp": "https://design.klic.co.kr/resources/mcp",
    "webmcp": "https://design.klic.co.kr/resources/webmcp",
    "schema": "/klic-interface-library-pages/api/v1/registry.schema.json",
    "openapi": "/klic-interface-library-pages/api/v1/openapi.json",
    "capabilities": "/klic-interface-library-pages/api/v1/capabilities.json",
    "tools": "/klic-interface-library-pages/api/v1/tools.json"
  },
  "counts": {
    "components": 104,
    "componentForms": 520,
    "blocksReady": 231,
    "blocksPlanned": 80,
    "blocksTotal": 311,
    "readyTotal": 335,
    "blockModules": 59,
    "total": 415
  },
  "release": "59135ab672b6ade6",
  "designSystem": {
    "schemaVersion": "1.0",
    "revision": "ed3d6f98ee9de632d172e6d76605b692fb839bbbadb5ef6e342bc3287d7553ef"
  },
  "themes": {
    "count": 10,
    "profiles": [
      "core",
      "studio",
      "data"
    ],
    "materials": [
      "flat",
      "glass",
      "solid-glass",
      "liquid-glass"
    ],
    "modes": [
      "system",
      "light",
      "dark"
    ],
    "inventory": {
      "total": 3751,
      "primitive": 3143,
      "brand": 247,
      "semantic": 248,
      "component": 113,
      "material": 2496,
      "materialTotal": 2928
    }
  },
  "apiPaths": [
    {
      "path": "https://design.klic.co.kr/api/v1/search",
      "operationId": "searchItems"
    },
    {
      "path": "/klic-interface-library-pages/api/v1/design-system.json",
      "operationId": "getDesignSystem"
    },
    {
      "path": "https://design.klic.co.kr/api/v1/health",
      "operationId": "getHealth"
    },
    {
      "path": "/klic-interface-library-pages/api/v1/registry.json",
      "operationId": "getRegistry"
    },
    {
      "path": "/klic-interface-library-pages/api/v1/capabilities.json",
      "operationId": "getCapabilities"
    },
    {
      "path": "/klic-interface-library-pages/api/v1/tools.json",
      "operationId": "getToolSchemas"
    },
    {
      "path": "https://design.klic.co.kr/api/v1/items/{kind}/{id}.json",
      "operationId": "getItem"
    },
    {
      "path": "/klic-interface-library-pages/api/v1/themes.json",
      "operationId": "listThemes"
    },
    {
      "path": "https://design.klic.co.kr/api/v1/themes/{id}.json",
      "operationId": "getTheme"
    },
    {
      "path": "https://design.klic.co.kr/api/v1/theme-plan/{id}",
      "operationId": "getThemeInstallPlan"
    },
    {
      "path": "https://design.klic.co.kr/api/v1/theme-bundles/{id}/{profile}/{material}/{mode}.json",
      "operationId": "getThemeBundle"
    }
  ]
};
