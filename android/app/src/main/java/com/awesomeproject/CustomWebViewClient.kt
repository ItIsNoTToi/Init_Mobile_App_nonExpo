package com.awesomeproject

import android.webkit.WebView
import android.webkit.WebViewClient
import android.webkit.SslErrorHandler
import android.net.http.SslError

class CustomWebViewClient : WebViewClient() {
    override fun onReceivedSslError(view: WebView?, handler: SslErrorHandler?, error: SslError?) {
        // ⚠️ CHỈ DÙNG CHO TEST — bỏ qua cảnh báo SSL
        handler?.proceed()
    }
}
