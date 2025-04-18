buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:8.1.0") // or your version
        classpath("com.google.gms:google-services:4.4.2") // ✅ Add this
    }
}
