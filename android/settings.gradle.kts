dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()  // ✅ Required for Firebase plugins
        mavenCentral()
    }
}
