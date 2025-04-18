plugins {
    id("com.android.application")
    id("com.google.gms.google-services") // ✅ Apply plugin here
}

android {
    namespace = "com.vitalfitapp"
    compileSdk = 34
    defaultConfig {
        applicationId = "com.vitalfitapp"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
    }
    // ...
}

dependencies {
    implementation("com.google.firebase:firebase-analytics:21.5.0") // or others like auth, firestore etc.
}

// This line should be automatically applied by the plugin above
