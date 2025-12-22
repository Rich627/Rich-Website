// CloudFront Function: url-rewrite-html
// Automatically rewrites URLs without extensions to .html
// e.g., /resume -> /resume.html
//
// Deployed to: arn:aws:cloudfront::070576557102:function/url-rewrite-html
// Associated with: E198OF3F75433Q (rich-liu.com)

function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Skip root path (handled by DefaultRootObject)
    if (uri === "/" || uri === "") {
        return request;
    }

    // If URI ends with /, replace with .html
    if (uri.endsWith("/")) {
        request.uri = uri.substring(0, uri.length - 1) + ".html";
    }
    // If URI has no file extension, add .html
    else if (uri.lastIndexOf(".") <= uri.lastIndexOf("/")) {
        request.uri = uri + ".html";
    }

    return request;
}
