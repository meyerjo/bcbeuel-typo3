
config {
# Static documents
  # absRefPrefix = /
    simulateStaticDocuments = 1
    simulateStaticDocuments_noTypeIfNoTitle = 1
  
  # Spam protect
    spamProtectEmailAddresses = 1
    spamProtectEmailAddresses_atSubst = &#064;
}

# Page layout
page = PAGE
page {


    config.no_cache = 1
    // Favorite icon
    shortcutIcon = fileadmin/bcbeuel/bcbeuel.ico

    // Standard meta tags
    meta {
        keywords = Badminton, Federball, Club, Verein, Bonn, Beuel, Bundesliga, Deutscher Meister, Maywald, Zwiebler
        description = 1. Badminton Club Beuel 1955 e.V., 1. BC Beuel, Federball Verein in Bonn
        copyright = 1. BC Beuel
        author = Ottmar Kr�mer-Fuhrmann
        language = de
        robots = all
    } // meta

    includeCSS {
        bootstrap = fileadmin/template/bootstrap/css/bootstrap.min.css
        colsmheight = fileadmin/template/bootstrap/css/col-sm-height.css
        bcbeuel = fileadmin/template/bootstrap/bcbeuel/bcbeuel.css
    }

    includeJS {
        jquery = fileadmin/template/bootstrap/js/jquery.min.js
        bootstrap = fileadmin/template/bootstrap/js/bootstrap.min.js
        carousel = fileadmin/template/bootstrap/js/carousel.js
    }

    10 = FLUIDTEMPLATE
    10 {
        file = {$template_file}
        layoutRootPath = fileadmin/template/layouts/
        partialRootPath = fileadmin/template/partials/

            variables {
            siteName = TEXT
            siteName.value = 1. BC Beuel

            content < styles.content.get
            content_left < styles.content.getLeft
            content_right < styles.content.getRight
            content_border < styles.content.getBorder


        }
    }

    20 = TEXT
    20.value = Lorem ipsum

}

// Search
tt_content.search.30 {
    // Hide text
    dataArray.10.label >

        // Hide combo box, search in header + bodytext
    dataArray.20.type = scols=hidden
    dataArray.20.valueArray >
    dataArray.20.value = tt_content.header-bodytext
}   // tt_content.search.30
