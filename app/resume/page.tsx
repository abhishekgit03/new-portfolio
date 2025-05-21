"use client"

import { useState } from "react"
import { Download, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("preview")

  // In a real implementation, you would have the actual PDF file path here
  const resumeUrl = "/resume.pdf"

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Resume</h1>
        <p className="text-muted-foreground mb-8">
          View or download my resume to learn more about my education, experience, and skills.
        </p>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <CardTitle>Abhishek Dasgupta - Resume</CardTitle>
            </div>
            <CardDescription>Last updated: April 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="download">Download</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-6">
                <div className="aspect-[8.5/11] w-full border rounded-lg overflow-hidden bg-muted/30">
                  <iframe
                    src={`${resumeUrl}#toolbar=0&navpanes=0`}
                    className="w-full h-full min-h-[70vh]"
                    title="Resume Preview"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    For better viewing experience, you can download the resume.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="download" className="mt-6">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <FileText className="h-16 w-16 mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-medium mb-2">Ready to download</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-md">
                    Click the button below to download my resume in PDF format.
                  </p>
                  <a href={resumeUrl} download="Abhishek_Dasgupta_Resume.pdf">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
            <p className="text-xs text-muted-foreground">PDF format, 1 page</p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setActiveTab("preview")} className="text-xs">
                <Eye className="mr-1 h-3 w-3" />
                Preview
              </Button>
              <a href={resumeUrl} download="Abhishek_Dasgupta_Resume.pdf">
                <Button variant="ghost" size="sm" className="text-xs">
                  <Download className="mr-1 h-3 w-3" />
                  Download
                </Button>
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
